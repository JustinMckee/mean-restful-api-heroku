import { MeanContactlistPage } from './app.po';

describe('mean-contactlist App', () => {
  let page: MeanContactlistPage;

  beforeEach(() => {
    page = new MeanContactlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
