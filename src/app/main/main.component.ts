import {Component, Input, OnInit} from '@angular/core';
import {Projects} from "../projects.model";
import {ProjectsService} from "../projects.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
