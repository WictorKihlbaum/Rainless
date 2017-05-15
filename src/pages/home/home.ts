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
export class HomePage {

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
    this.setupNetworkWatcher();
  }

  setupNetworkWatcher() {
    // Network connection is down.
    this.network.onDisconnect().subscribe(() => {
      this.showToast();
    });

    this.network.onConnect().subscribe(() => {
      // Refresh page to load google API js file.
      window.location.reload();
    });
  }

  showToast() {
    this.statusBar.hide();
    this.toast = this.toastCtrl.create({
      message: 'Network connection lost. Please reestablish connection to continue using the app.',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top',
      cssClass: 'error-toast'
    });
    this.toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.toast.present();
  }

}
