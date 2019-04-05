import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit {
  //typescript syntax for defining a type. allows us to access the info in the html file.
  //@Input() decorator allows parent component to be able to bind to a property
  //@Input('srvElement') ...adding an alias to a custom prop
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}