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

  private parameters: any;
  private resultIsSaved: boolean = false;
  private resultsStore: any;


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private statusBar: StatusBar,
    private iab: InAppBrowser) {

    this.parameters = navParams;
    this.setResultsStore();
    this.checkIfResultIsSaved();
  }

  async checkIfResultIsSaved() {
    const key = this.parameters.get('keyName');
    const value = await this.resultsStore.getItem(key);
    if (value != null) this.resultIsSaved = true;
  }

  async onSaveResult() {
    const key = this.parameters.get('keyName');
    await this.resultsStore.setItem(key, this.parameters);
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
