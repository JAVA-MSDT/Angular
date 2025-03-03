import { HerosService } from './heros.service';

describe('HeroService', () => {
  let heroService: HerosService;

  beforeEach(() => {
    heroService = new HerosService();
  });

  it('Return heroes list size of 10', (done: DoneFn) => {
    expect(heroService.getHeroes().length).toBe(10);
    done();
  });
});
