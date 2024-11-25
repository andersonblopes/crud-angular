import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, MatToolbarModule, TranslateModule, MatCardModule]
})
export class AppComponent {
  title = 'crud-angular';
  dynamicLink: string = '';

  constructor(private translate: TranslateService) {
    this.dynamicLink = environment.privacy_police_link;
    // Default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  // Optional: Implement a method to sanitize the dynamic link (optional but recommended)
  get sanitizedLink() {
    return this.dynamicLink;
  }
}
