import { ElementArrayFinder, ElementFinder, by } from 'protractor';
import { AppPage } from './app.po';

describe('Heroes List App', () => {
  const appPage = new AppPage();
  beforeEach(async () => {
    await appPage.getBaseURL();
  });

  it('Shoud have a header', async () => {
    const text = await appPage.getHeaderText();
    expect(text).toBe('Tour of Heroes');
  });

  it('should have 10 heroes on load', async () => {
    const allHeroes = appPage.getListOfHeroes();
    expect(await allHeroes.count()).toEqual(10);
  });

  describe('Search Input', () => {
    let searchInput: ElementFinder;
    let heroesList: ElementArrayFinder;

    beforeEach(async () => {
      searchInput = appPage.getSearchInput();
      heroesList = appPage.getListOfHeroes();
      await searchInput.sendKeys('Dr');
    });

    it('should find DR element and count of 2 ', async () => {
      expect(await heroesList.count()).toEqual(2);
    });

    it('Highlight 2 founding elements with class highlight-search', async () => {
      (await heroesList).forEach((hero) => {
        const spanHero = hero.element(by.css('span'));
        expect(spanHero.getAttribute('class')).toBe('highlight-search');
      });
    });
  });
});
