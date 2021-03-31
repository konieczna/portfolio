import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {ProjectItemComponent} from "./project-item/project-item.component";
import { BrowserModule } from "@angular/platform-browser";

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: ProjectsComponent},
  {path: 'work/:id', component: ProjectItemComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
