import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-advanced-options',
  templateUrl: 'advanced-options.html',
})
export class AdvancedOptionsPage {

  private mmPrecipitation: number;


  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.mmPrecipitation = navParams.get('mm');
  }

  onClosePopover() {
    this.viewCtrl.dismiss(this.mmPrecipitation);
  }

}
