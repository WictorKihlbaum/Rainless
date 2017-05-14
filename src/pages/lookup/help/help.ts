import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  private lastYear: number;


  constructor() {}

  ngOnInit() {
    this.lastYear = new Date().getFullYear() - 1;
  }

}
