import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logImg = {
      src: "https://cdn.jsdelivr.net/gh/thiago-glauco/javascriptforgood@master/src/app/images/logo.png",
      alt: "Logo JavaScript for Good"
    }
  constructor() { }

  ngOnInit() {
  }

}