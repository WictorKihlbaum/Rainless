import { Component } from '@angular/core';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  private lastYear: number;

  constructor() {
    this.lastYear = new Date().getFullYear() - 1;
  }

}
