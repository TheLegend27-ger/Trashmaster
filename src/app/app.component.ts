import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'Trashmaster';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
