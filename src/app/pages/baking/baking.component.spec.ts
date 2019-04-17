import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingComponent } from './baking.component';
import { SliderComponent } from 'src/app/slider/slider.component';

describe('BakingComponent', () => {
  let component: BakingComponent;
  let fixture: ComponentFixture<BakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BakingComponent,
        SliderComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
