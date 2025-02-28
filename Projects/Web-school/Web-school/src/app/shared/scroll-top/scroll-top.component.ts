import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'web-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {}

  toTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
