import { AngularFirstPage } from './app.po';

describe('angular-first App', () => {
  let page: AngularFirstPage;

  beforeEach(() => {
    page = new AngularFirstPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
