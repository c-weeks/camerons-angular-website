import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.scss']
})
export class ChocolateComponent implements OnInit {
  public chocolateLinks = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 11; i++) {
      this.chocolateLinks.push(`/assets/imgs/chocolate/chocolate${i}.jpg`);
    }
  }

}
