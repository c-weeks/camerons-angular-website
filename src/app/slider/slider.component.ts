import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() content: string[] = [];
  @Input() isImageSlider = true;

  private currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  getContent(): string {
    if (this.content && this.content.length > 0) {
      return this.content[this.currentIndex];
    }
  }

  previous() {
    if (this.currentIndex + 1 > this.content.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  next() {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.content.length - 1;
    } else {
      this.currentIndex--;
    }
  }

}
