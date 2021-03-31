import { Injectable } from '@angular/core';
import {Projects} from "./projects.model";
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsChanged = new Subject<Projects[]>();
  public projects: Projects[] = [
    new Projects(0, 'Agata Reszelewska', './../assets/agatka.png', 'Agata Reszelewska Fizjoterapia is a landing page made with Wordpress, projected and implemented with my vision.', 'https://agatareszelewska.pl'),
    new Projects(1, 'Globe', './../assets/globe.png', 'Page based on Wordpress with custom theme projected and implemented by myself.', 'http://pwglobe.com'),
    new Projects(2, 'JMP', './../assets/jmp.png', 'JMP is a wordpress information page using popular plugins like ACF, CF7, Polylang.', 'http://jmplogistics.pl')
  ];

  constructor() {
  }

  getProjects() {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects.slice()[index];
  }


}
