import { AngularnasaPage } from './app.po';

describe('angularnasa App', () => {
  let page: AngularnasaPage;

  beforeEach(() => {
    page = new AngularnasaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
