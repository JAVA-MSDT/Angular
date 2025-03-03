import {
  browser,
  element,
  by,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';

export class AppPage {
  async getBaseURL(): Promise<any> {
    return browser.get('/');
  }

  async getHeaderText(): Promise<string> {
    const header = by.css('h1');
    return element(header).getText();
  }

  getListOfHeroes(): ElementArrayFinder {
    const heroesList = by.css('li');
    return element.all(heroesList);
  }

  getSearchInput(): ElementFinder {
    const searchInput = by.css('input');
    return element(searchInput);
  }
}
