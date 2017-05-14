import { Component, OnInit, ViewChild } from '@angular/core';
import { Content, Searchbar, ViewController } from 'ionic-angular';

declare const google: any;

@Component({
  selector: 'page-modal-autocomplete-items',
  templateUrl: 'modal-autocomplete-items.html'
})
export class ModalAutocompleteItems implements OnInit {

  @ViewChild('searchbar') searchbar: Searchbar;
  @ViewChild('content') content: Content;

  autocompleteItems: any;
  autocomplete: any;
  acService: any;


  constructor(public viewCtrl: ViewController) {}

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = { query: '' };
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
    this.searchbar.setFocus();
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
    let self = this;
    let config = {
      types:  ['geocode'],
      input: this.autocomplete.query
    };
    this.acService.getPlacePredictions(config, (predictions, status) => {
      self.autocompleteItems = [];
      predictions.forEach(prediction => {
        self.autocompleteItems.push(prediction);
      });
    });
  }

}
