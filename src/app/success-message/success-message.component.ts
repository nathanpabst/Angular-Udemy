import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  //styleUrls: ['./success-message.component.css']
  styles: [
    `
        p {
            padding: 20px;
            background-color: green;
            border: 1px solid;
          }
    `
  ]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
