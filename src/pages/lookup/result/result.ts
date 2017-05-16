import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
import * as localforage from "localforage";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private resultsStore: any;
  private resultIsSaved: boolean = false;
  private niceLookingDate: string;
  private address: string;
  private mm: number;
  private precipDays: number;
  private yearsBack: number;


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private statusBar: StatusBar,
    private iab: InAppBrowser) {

    this.setResultsStore();
    this.checkIfResultIsSaved();

    this.niceLookingDate = navParams.get('niceLookingDate');
    this.address = navParams.get('location').address;
    this.mm = navParams.get('mm');
    this.precipDays = navParams.get('precipDays');
    this.yearsBack = navParams.get('yearsBack');
  }

  async checkIfResultIsSaved() {
    const key = this.navParams.get('keyName');
    const value = await this.resultsStore.getItem(key);
    if (value != null) this.resultIsSaved = true;
  }

  async onSaveResult() {
    const key = this.navParams.get('keyName');
    await this.resultsStore.setItem(key, this.navParams);
    this.resultIsSaved = true;
    this.presentToast();
  }

  setResultsStore() {
    this.resultsStore = localforage.createInstance({ name: "rainless", storeName: 'results' });
  }

  presentToast() {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: 'Result was successfully saved',
      duration: 5000,
      position: 'top',
      cssClass: 'success-toast'
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

  onVisitDarkSky() {
    this.iab.create('https://darksky.net/poweredby/', '_system');
  }

  onPopToRoot() {
    this.navCtrl.popToRoot();
  }

}
