import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }

  filterHero(searchArg: string): Hero[] {
    return HEROES.filter((hero) =>
      hero.name.toLocaleLowerCase().includes(searchArg.toLocaleLowerCase())
    );
  }
}
