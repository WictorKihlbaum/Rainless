import { Component, OnInit } from '@angular/core';
import { ContactPage } from "../contact/contact";
import { SavedResultsPage } from "../saved-results/saved-results";
import { AboutPage } from "../about/about";
import { LookupPage } from "../lookup/lookup";
import { SettingsPage } from "../settings/settings";
import { Network } from '@ionic-native/network';
import { ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private lookupPage = LookupPage;
  private aboutPage = AboutPage;
  private savedResultsPage = SavedResultsPage;
  private contactPage = ContactPage;
  private settingsPage = SettingsPage;
  private toast: any;


  constructor(
    private network: Network,
    private toastCtrl: ToastController,
    private statusBar: StatusBar) {
  }

  ngOnInit() {
    this.setupNetworkWatchers();
  }

  setupNetworkWatchers() {
    // Network connection is down.
    this.network.onDisconnect().subscribe(() => {
      this.showToast('Network connection lost. Please reestablish connection to continue using the app.', 'error-toast');
    });
    // Network connection is up. Dismiss error toast.
    this.network.onConnect().subscribe(() => {
      this.toast.dismiss();
    });
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    this.toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top',
      cssClass: css
    });
    this.toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.toast.present();
  }

}
