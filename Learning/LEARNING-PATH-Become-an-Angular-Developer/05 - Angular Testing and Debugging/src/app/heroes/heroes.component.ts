import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HerosService } from '../services/heros.service';
import { WebStorageService } from '../services/web-storage.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroesService: HerosService,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit(): void {
    // const filtered = this.webStorageService.get('HEROES');
    this.webStorageService.getRemote().subscribe(
      (filtered) => {
        this.heroes =
          filtered === null
            ? this.heroesService.getHeroes()
            : this.heroesService.filterHero(filtered);
      },
      (error) => {
        console.error('On Heroes Intit Error', error);
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  updateFilter(searchArg: string): void {
    this.webStorageService.setRemote(searchArg).subscribe((filtered) => {
      this.heroes =
        filtered === null
          ? this.heroesService.getHeroes()
          : this.heroesService.filterHero(filtered);
    });
    /*
    this.heroes = this.heroesService.filterHero(searchArg);
    this.webStorageService.set('HEROES', JSON.stringify(this.heroes));
    */
  }
}
