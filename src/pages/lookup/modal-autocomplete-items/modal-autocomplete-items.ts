import { Component, ViewChild } from '@angular/core';
import { Content, Searchbar, ViewController } from 'ionic-angular';

declare const google: any;

@Component({
  selector: 'page-modal-autocomplete-items',
  templateUrl: 'modal-autocomplete-items.html'
})
export class ModalAutocompleteItems {

  @ViewChild('searchbar') searchbar: Searchbar;
  @ViewChild('content') content: Content;

  acService: any;
  autocompleteItems: any;
  autocomplete: any;


  constructor(private viewCtrl: ViewController) {
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = { query: '' };
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
    setTimeout(() => this.searchbar.setFocus(), 100);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    const self = this;
    const config = {
      types:  ['geocode'],
      input: this.autocomplete.query
    };
    this.acService.getPlacePredictions(config, (predictions, status) => {
      self.autocompleteItems = [];
      if (predictions) {
        predictions.forEach(prediction => {
          self.autocompleteItems.push(prediction);
        });
      }
    });
  }

}
