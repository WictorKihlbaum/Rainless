import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(private iab: InAppBrowser) {}

  onVisitDarkSky() {
    this.iab.create('https://darksky.net/poweredby/', '_system');
  }

}
