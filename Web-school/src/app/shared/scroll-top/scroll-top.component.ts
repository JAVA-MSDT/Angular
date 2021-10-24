import {
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'web-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit(): void {}

  toTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  detectScroll(): void {
    
  }
}
