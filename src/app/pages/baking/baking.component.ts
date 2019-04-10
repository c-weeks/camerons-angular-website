import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.css']
})
export class BakingComponent implements OnInit {
  public photoLinks = [];
  constructor() { }

  ngOnInit() {
    // TODO: get all images with prefix flower and put them in links
    for (let i = 1; i <= 13; i++) {
      this.photoLinks.push(`/assets/imgs/baking/baking${i}.jpg`);
    }
  }

}
