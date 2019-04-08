import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;


  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // onIntervalFired(firedNumber: number) {
  //   //console.log(firedNumber);
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }
}


// export class AppComponent {
//   serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

//   onServerAdded(serverData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//     });
//   }

//   onChangeFirst() {
//     this.serverElements[0].name = 'changed!';
//   }

//   onDestroyFirst() {
//     this.serverElements.splice(0,1);
//   }
// }
