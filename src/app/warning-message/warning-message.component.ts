import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning-message.component.html',
  //styleUrls: ['./warning-message.component.css']
  styles: [
    `
    p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `
  ]
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
