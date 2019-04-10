import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubDropdownComponent } from './nav-sub-dropdown.component';

describe('NavSubDropdownComponent', () => {
  let component: NavSubDropdownComponent;
  let fixture: ComponentFixture<NavSubDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSubDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
