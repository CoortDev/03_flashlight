import { Component } from '@angular/core';

import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isActive: boolean = false;

  constructor(private flashlight: Flashlight) {}

  flash() {
    if (this.isActive) {
      this.flashlight.switchOn()
    }
    else {
      this.flashlight.switchOff()
    }
  }
}
