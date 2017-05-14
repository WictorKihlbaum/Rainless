import { Component, ViewChild } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
import * as localforage from "localforage";
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-saved-results',
  templateUrl: 'saved-results.html',
})
export class SavedResultsPage {

  @ViewChild(Slides) slides: Slides;

  private savedResults: any = [];
  private resultsStore: any;
  private currentSlide: number = 1;


  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private statusBar: StatusBar) {

    this.setResultsStore();
    this.listSavedResults();
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

  listSavedResults() {
    this.resultsStore.iterate(value => {
      this.savedResults.push(value.data);
    });
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
    await this.resultsStore.removeItem(id);
    this.showToast('Result was successfully deleted');
    this.resetAndRefresh();
  }

  showToast(message: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top',
      cssClass: 'success-toast'
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

  resetAndRefresh() {
    this.savedResults = [];
    this.listSavedResults();
    this.onSlideChange();
  }

}
