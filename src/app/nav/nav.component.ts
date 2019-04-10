import { Component, OnInit } from '@angular/core';
import { SubPage } from '../models/subPage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public hobbiesPages: SubPage[] = [
    new SubPage('/photography', 'Photography'),
    new SubPage('/baking', 'Baking')
  ];

  constructor() { }

  ngOnInit() {
  }

}
