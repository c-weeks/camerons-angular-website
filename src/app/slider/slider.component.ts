import { Component, OnInit, Input, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = '39',
  LEFT_ARROW = '37',
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() content: string[] = [];
  @Input() isImageSlider = true;
  @Input() maxWidth: string;

  currentIndex = 0;

  @HostListener('keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY_CODE.RIGHT_ARROW) {
      this.next();
    }

    if (event.key === KEY_CODE.LEFT_ARROW) {
      this.previous();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  getContent(): string {
    if (this.content && this.content.length > 0) {
      return this.content[this.currentIndex];
    }
  }

  next() {
    if (this.currentIndex + 1 >= this.content.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.content.length - 1;
    } else {
      this.currentIndex--;
    }
  }

}
