import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  query: string;
  artists: any[] = [];
  currentArtist: any;

  constructor(private http: HttpClient) {
    this.query = '';
  }
  ngOnInit(): void {
    this.http.get<any>('../assets/data.json').subscribe((data) => {
      this.artists = data;
    });
  }

  showArtist(artist: any): void {
    this.query = artist.name;
    this.currentArtist = artist;
    artist.highlight = !artist.highlight;
    console.log(`Artist:: ${this.currentArtist}`);
  }
}
