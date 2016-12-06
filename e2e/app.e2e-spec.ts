import { SearchmoviesPage } from './app.po';

describe('searchmovies App', function() {
  let page: SearchmoviesPage;

  beforeEach(() => {
    page = new SearchmoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
