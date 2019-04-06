import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
 } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy,
  ViewChild {
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() { 
    console.log('constructor called here');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called here');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called here');
    console.log('text content here: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called here');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called here');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called here');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called here');
    console.log('text content here: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called here');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called here');
  }

}
