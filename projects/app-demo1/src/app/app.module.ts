import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {APP_BASE_HREF} from "@angular/common";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PipesModule
    ],
  providers: [
    { provide: APP_BASE_HREF, useValue: getBasePath()},
  ],
  // Enable this for as project not a web component
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {

    const app = createCustomElement(AppComponent, {injector: this.injector});
    if (!customElements.get('app-demo1-web')) {
      customElements.define('app-demo1-web', app);
    }
  }
  ngDoBootstrap(){}


}

export function getBasePath(): string {
  const currentUrl = ((document.currentScript as any)?.src || '') as string;
  return currentUrl.substr(0, currentUrl.lastIndexOf('/') + 1);
}
