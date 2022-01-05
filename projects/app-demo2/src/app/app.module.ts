import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule  implements DoBootstrap {
  constructor(private injector: Injector) {
    const app = createCustomElement(AppComponent, {injector: this.injector});
    if (!customElements.get('app-demo2-web')) {
      customElements.define('app-demo2-web', app);
    }
  }
  ngDoBootstrap() {
  }
}
