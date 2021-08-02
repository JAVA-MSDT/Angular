import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
