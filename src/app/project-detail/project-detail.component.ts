import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from "../projects.model";
import {Subscription} from "rxjs";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projects: Projects[] = [];
  subscription: Subscription;
  constructor(private projectsService: ProjectsService) { }

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
