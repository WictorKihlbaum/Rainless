import { Component, ViewChild } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
import * as localforage from "localforage";
import { Slides } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-saved-results',
  templateUrl: 'saved-results.html',
})
export class SavedResultsPage {

  @ViewChild(Slides) slides: Slides;

  private results: any = [];
  private resultsStore: any;
  private currentSlide: number = 1;


  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private statusBar: StatusBar,
    private iab: InAppBrowser) {

    this.setResultsStore();
    this.listResults();
  }

  setResultsStore() {
    this.resultsStore = localforage.createInstance({ name: "rainless", storeName: "results" });
  }

  onSlideChange() {
    this.currentSlide = this.slides.getActiveIndex() + 1;
    // Avoid bug (sometimes current slide gets bigger than total length)
    if (this.currentSlide > this.slides.length()) {
      this.currentSlide = this.slides.length();
    }
  }

  listResults() {
    this.resultsStore.iterate(value => {
      this.results.push(value.data);
    });
    // Show latest result first.
    this.results.reverse();
  }

  showConfirm(id: string) {
    const confirm = this.alertCtrl.create({
      title: 'Delete result',
      message: 'Are you sure you want to delete this result?',
      buttons: [
        {
          text: 'cancel',
          handler: () => {
            // Do nothing.
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.onDeleteResult(id);
          }
        }
      ]
    });
    confirm.present();
  }

  async onDeleteResult(id: string) {
    try {
      await this.resultsStore.removeItem(id);
      this.showToast('Result was successfully deleted', 'success-toast');
      this.resetAndRefresh();
    }
    catch (error) {
      this.showToast('An error occurred while trying to delete the saved result. Please try again.', 'error-toast');
    }
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top',
      cssClass: css
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

  resetAndRefresh() {
    this.results = [];
    this.listResults();
    this.onSlideChange();
  }

  onVisitDarkSky() {
    this.iab.create('https://darksky.net/poweredby/', '_system');
  }

}
