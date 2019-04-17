import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubDropdownComponent } from './nav-sub-dropdown.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubPage } from '../models/subPage';

describe('NavSubDropdownComponent', () => {
  let component: NavSubDropdownComponent;
  let fixture: ComponentFixture<NavSubDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavSubDropdownComponent,
        NavLinkComponent,
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
      ]
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

  it('should open when clicked', () => {
    component.subPages = [
      new SubPage('dummy/link/1', 'Dummy Page 1'),
      new SubPage('dummy/link/2', 'Dummy Page 2'),
    ];
    const headerEl = fixture.nativeElement.querySelector('.header');
    headerEl.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(true, 'expected isOpen to be true');
    const subPagesEl = fixture.nativeElement.querySelector('.subpages-container');
    expect(subPagesEl.children.length).toBe(2, 'expected 2 sub pages');
    expect(subPagesEl.children[0].innerText).toBe('Dummy Page 1', 'incorrect page name');
  });

  it('should close when click', () => {
    component.subPages = [
      new SubPage('dummy/link/1', 'Dummy Page 1'),
      new SubPage('dummy/link/2', 'Dummy Page 2'),
    ];
    component.isOpen = true;
    const el = fixture.nativeElement.querySelector('.header');
    fixture.detectChanges();
    expect(component.isOpen).toBe(true, 'expected isOpen to be true initally');
    el.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(false, 'expected isOpen to be false');
  });

  it('should toggle', () => {
    component.isOpen = true;
    component.toggle();
    expect(component.isOpen).toBe(false);
  });

  it('should close', () => {
    component.isOpen = true;
    component.close();
    expect(component.isOpen).toBe(false);
  });
});
