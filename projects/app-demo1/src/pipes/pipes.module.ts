import {NgModule} from "@angular/core";
import {AssetsPipe} from "./assets.pipe";

@NgModule({
  imports: [],
  declarations: [
    AssetsPipe,
  ],
  exports: [
    AssetsPipe
  ]
})
export class PipesModule {
}
