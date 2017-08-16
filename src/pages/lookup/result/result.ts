import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private niceLookingDate: string;
  private address: string;
  private mm: number;
  private precipDays: number;
  private yearsBack: number;


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private iab: InAppBrowser) {

    this.niceLookingDate = navParams.get('niceLookingDate');
    this.address = navParams.get('location').address;
    this.mm = navParams.get('mm');
    this.precipDays = navParams.get('precipDays');
    this.yearsBack = navParams.get('yearsBack');
  }

  onVisitDarkSky() {
    this.iab.create('https://darksky.net/poweredby/', '_system');
  }

  onPopToRoot() {
    this.navCtrl.popToRoot();
  }

}
