import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app-demo1';

  constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
  }
}
