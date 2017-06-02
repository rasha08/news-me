import { NewsMePage } from './app.po';

describe('news-me App', () => {
  let page: NewsMePage;

  beforeEach(() => {
    page = new NewsMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
