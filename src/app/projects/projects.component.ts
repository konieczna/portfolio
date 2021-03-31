import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from "../projects.model";
import {Subscription} from "rxjs";
import {ProjectsService} from "../projects.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
projects: Projects[] = [];
subscription: Subscription;
  constructor(public projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.subscription = this.projectsService.projectsChanged
      .subscribe(
        (projects: Projects[]) => {
          this.projects = projects;
        }
      );
    this.projects = this.projectsService.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
