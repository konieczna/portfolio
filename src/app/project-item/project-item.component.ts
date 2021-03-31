import {Component, OnInit} from '@angular/core';
import {Projects} from "../projects.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  projects: Projects;
  id: number;
  constructor(private route: ActivatedRoute,
              private projectsService: ProjectsService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.projects = this.projectsService.getProject(this.id);
        }
      );
  }

  onGoBack() {
    this.router.navigate(['/work']);
  }

}
