import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
//@Output()...passing an event out of the component. EventEmitter enables other components to listen for events
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = ''; using local ref, so this is no longer needed
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {  
   this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
