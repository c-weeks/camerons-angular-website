import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateComponent } from './chocolate.component';
import { SliderComponent } from 'src/app/slider/slider.component';

describe('BakingComponent', () => {
  let component: ChocolateComponent;
  let fixture: ComponentFixture<ChocolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChocolateComponent,
        SliderComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
