import { SalesMailBuilderPage } from './app.po';

describe('sales-mail-builder App', () => {
  let page: SalesMailBuilderPage;

  beforeEach(() => {
    page = new SalesMailBuilderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
