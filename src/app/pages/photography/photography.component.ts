import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  public photoLinks = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 38; i++) {
      this.photoLinks.push(`/assets/imgs/photography/flower${i}.jpg`);
    }
  }

}
