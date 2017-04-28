import { Component } from '@angular/core';
import { ContactPage } from "../contact/contact";
import { SavedResultsPage } from "../saved-results/saved-results";
import { AboutPage } from "../about/about";
import { LookupPage } from "../lookup/lookup";
import { SettingsPage } from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private lookupPage = LookupPage;
  private aboutPage = AboutPage;
  private savedResultsPage = SavedResultsPage;
  private contactPage = ContactPage;
  private settingsPage = SettingsPage;

  constructor() {}

}
