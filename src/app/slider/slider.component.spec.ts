import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { By } from '@angular/platform-browser';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  const contentLength = 5;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('keyboard controls', () => {
    beforeEach(() => {
      component.content = Array.from(new Array(contentLength), (val, index) => index.toString());
    });

    it('should go to the next slide when right arrow clicked', () => {
      fixture.detectChanges();
      const event = new KeyboardEvent('keyup', {
        'key': '39'
      });
      const el = fixture.debugElement;
      expect(component.currentIndex).toBe(0);
      el.triggerEventHandler('keyup', event);
      fixture.detectChanges();
      expect(component.currentIndex).toBe(1);
    });

    it('should go to the previous slide when the left arrow clicked', () => {
      const event = new KeyboardEvent('keyup', {
        'key': '37'
      });
      const el = fixture.debugElement;
      expect(component.currentIndex).toBe(0);
      el.triggerEventHandler('keyup', event);
      fixture.detectChanges();
      expect(component.currentIndex).toBe(4);
    });

    it('should not change when any other key clicked', () => {
      const event = new KeyboardEvent('keyup', {
        'key': 'Escape'
      });
      const el = fixture.debugElement.nativeElement;
      expect(component.currentIndex).toBe(0);
      el.dispatchEvent(event);
      fixture.detectChanges();
      expect(component.currentIndex).toBe(0);
    });
  });

  describe('#next', () => {
    beforeEach(() => {
      component.content = Array.from(new Array(contentLength), (val, index) => index.toString());
    });

    it('should increase index when less than content length', () => {
      expect(component.currentIndex).toBe(0, 'should start at 0');
      component.next();
      expect(component.currentIndex).toBe(1, 'after 1st next');
      component.next();
      expect(component.currentIndex).toBe(2, 'after 2nd next');
    });

    it('should reset index to 0 when equal to the content length', () => {
      component.currentIndex = 3;
      expect(component.currentIndex).toBe(3, 'should start at 3');
      component.next();
      expect(component.currentIndex).toBe(4, 'after 1st next');
      component.next();
      expect(component.currentIndex).toBe(0, 'after 2nd next');
    });
  });

  describe('#previous', () => {
    const contentLength = 5;
    beforeEach(() => {
      component.content = Array.from(new Array(contentLength), (val, index) => index.toString());
    });

    it('should decrease index when more than 0', () => {
      component.currentIndex = 4;
      expect(component.currentIndex).toBe(4, 'should start at 4');
      component.previous();
      expect(component.currentIndex).toBe(3, 'after 1st previous');
      component.previous();
      expect(component.currentIndex).toBe(2, 'after 2nd previous');
    });

    it('should reset index to the content length - 1 when less than 0', () => {
      component.currentIndex = 1;
      expect(component.currentIndex).toBe(1, 'should start at 1');
      component.previous();
      expect(component.currentIndex).toBe(0, 'after 1st previous');
      component.previous();
      expect(component.currentIndex).toBe(4, 'after 2nd previous');
    });
  });
});
