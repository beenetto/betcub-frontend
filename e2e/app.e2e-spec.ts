import { BetcubFrontendPage } from './app.po';

describe('betcub-frontend App', function() {
  let page: BetcubFrontendPage;

  beforeEach(() => {
    page = new BetcubFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
