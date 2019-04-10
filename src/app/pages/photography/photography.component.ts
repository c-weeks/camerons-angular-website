import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  public photoLinks = [];
  constructor() { }

  ngOnInit() {
    // TODO: get all images with prefix flower and put them in links
    for (let i = 1; i <= 12; i++) {
      this.photoLinks.push(`/assets/imgs/photography/flower${i}.jpg`);
    }
  }

}
