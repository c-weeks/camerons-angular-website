import { Component, OnInit } from '@angular/core';
import { SubPage } from '../models/subPage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public hobbiesPages: SubPage[] = [
    new SubPage('/hobbies/photography', 'Photography'),
    new SubPage('/hobbies/baking', 'Baking'),
    new SubPage('/hobbies/chocolate', 'Chocolate'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
