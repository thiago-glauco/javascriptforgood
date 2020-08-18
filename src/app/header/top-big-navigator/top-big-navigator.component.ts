import { Component, OnInit } from '@angular/core';
import { NavigationRoutes } from '../nav-interface';

@Component({
  selector: 'app-top-big-navigator',
  templateUrl: './top-big-navigator.component.html',
  styleUrls: ['./top-big-navigator.component.css']
})
export class TopBigNavigatorComponent implements OnInit {

  navigationRoutes = NavigationRoutes;
  constructor() { }

  ngOnInit() {
  }

}