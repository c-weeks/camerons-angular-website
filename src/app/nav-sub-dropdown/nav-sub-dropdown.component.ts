import { Component, OnInit, Input } from '@angular/core';
import { SubPage } from '../models/subPage';

@Component({
  selector: 'app-nav-sub-dropdown',
  templateUrl: './nav-sub-dropdown.component.html',
  styleUrls: ['./nav-sub-dropdown.component.scss']
})
export class NavSubDropdownComponent implements OnInit {
  @Input() subPages: SubPage[] = [];
  @Input() headerName = '';

  constructor() { }

  ngOnInit() {
  }

}
