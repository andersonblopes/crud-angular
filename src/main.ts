import {AppComponent} from "./app/app.component";
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {importProvidersFrom} from "@angular/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {APP_ROUTES} from "./app/app.routes";

import {CommonModule} from "@angular/common";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, CommonModule),
    // ngx-translate configuration
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
