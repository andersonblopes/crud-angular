import {AppComponent} from "./app/app.component";
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {importProvidersFrom} from "@angular/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {APP_ROUTES} from "./app/app.routes";

import {CommonModule} from "@angular/common";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, CommonModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideAnimations()
]
})
  .catch(err => console.error(err));
