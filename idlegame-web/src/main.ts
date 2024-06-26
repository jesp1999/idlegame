import { enableProdMode } from '@angular/core';
import { appConfig } from "./app/app.config";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .then(() => console.log('App bootstrapped'))
  .catch((err: Error) => console.error(err));
