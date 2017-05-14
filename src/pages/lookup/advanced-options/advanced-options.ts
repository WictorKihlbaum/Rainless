import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-advanced-options',
  templateUrl: 'advanced-options.html',
})
export class AdvancedOptionsPage {

  public mmPrecipitation: number;


  constructor(public viewCtrl: ViewController, public navParams: NavParams) {}

  ngOnInit() {
    this.mmPrecipitation = this.navParams.get('mm');
  }

  onClosePopover() {
    this.viewCtrl.dismiss(this.mmPrecipitation);
  }

}
