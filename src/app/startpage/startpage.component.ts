import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  bgImage: string = "./assets/img/Capa 2.png";

  constructor() {
    console.log('Constructor of StartPageComponent');
    document.body.style.backgroundColor = "var(--start-blue-bg)";
  }
}
