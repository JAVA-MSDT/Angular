import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appOnlineStatus]',
  standalone: true
})
export class OnlineStatus implements AfterContentInit {

  @Input() public appOnlineStatus: boolean | undefined;

  constructor(private element: ElementRef<HTMLAnchorElement>) { }

  ngAfterContentInit(): void {
    if (this.appOnlineStatus === true) {
      this.element.nativeElement.innerHTML += ' <i class"bi bi-lightning-fill></i>'
    }
  }

}
