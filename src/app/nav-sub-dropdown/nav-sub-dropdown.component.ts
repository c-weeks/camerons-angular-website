import { Component, OnInit, Input } from '@angular/core';
import { SubPage } from '../models/subPage';
import { openCloseAnimation } from '../animations/openClose';

@Component({
  selector: 'app-nav-sub-dropdown',
  templateUrl: './nav-sub-dropdown.component.html',
  styleUrls: ['./nav-sub-dropdown.component.scss'],
  animations: [
    openCloseAnimation,
  ]
})
export class NavSubDropdownComponent implements OnInit {
  @Input() subPages: SubPage[] = [];
  @Input() headerName = '';
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

}
