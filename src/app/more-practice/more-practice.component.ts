import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-practice',
  templateUrl: './more-practice.component.html',
  //styleUrls: ['./more-practice.component.css']
  styles: [
    `
      p {
            padding: 20px;
            background-color: gray;
            border: 1px solid;
        }

    `
  ]
})
export class MorePracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
