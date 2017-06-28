import { ProgressbuttonNg2Page } from './app.po';

describe('progressbutton-ng2 App', () => {
  let page: ProgressbuttonNg2Page;

  beforeEach(() => {
    page = new ProgressbuttonNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
