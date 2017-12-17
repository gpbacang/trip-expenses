import { SendEmailPage } from './app.po';

describe('send-email App', () => {
  let page: SendEmailPage;

  beforeEach(() => {
    page = new SendEmailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
