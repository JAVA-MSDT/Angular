import { HighlightSearchPipe } from './highlight-search.pipe';

describe('HighlightSearchPipe', () => {
  const pipe = new HighlightSearchPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Return span when the value is filtered', () => {
    expect(pipe.transform('search', 'sea')).toBe(
      '<span class="highlight-search">sea</span>rch'
    );
  });
});
