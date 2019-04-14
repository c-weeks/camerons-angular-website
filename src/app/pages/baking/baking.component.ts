import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.scss']
})
export class BakingComponent implements OnInit {
  public bakingLinks = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.bakingLinks.push(`/assets/imgs/baking/baking${i}.jpg`);
    }
  }

}
