import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ProjectsService} from "./projects.service";
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProjectItemComponent } from './project-item/project-item.component';
import { MobileMenuToggleDirective } from './mobile-menu-toggle.directive';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProjectItemComponent,
    MobileMenuToggleDirective,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
