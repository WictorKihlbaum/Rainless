import { Component } from '@angular/core';
import { AboutPage } from "../about/about";
import { LookupPage } from "../lookup/lookup";
import { LaunchReview } from "@ionic-native/launch-review";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LaunchReview]
})
export class HomePage {

  private lookupPage = LookupPage;
  private aboutPage = AboutPage;


  constructor(private launchReview: LaunchReview) {}

  onRateApp() {
    const appId: string = '1223036183';
    this.launchReview.launch(appId)
      .then(() => {
        console.log('Successfully launched store app');
      });
  }

}
