import { HomesweethomePage } from './app.po';

describe('homesweethome App', function() {
  let page: HomesweethomePage;

  beforeEach(() => {
    page = new HomesweethomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
