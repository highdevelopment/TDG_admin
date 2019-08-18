import { @authModule } from './@auth.module';

describe('@authModule', () => {
  let @authModule: @authModule;

  beforeEach(() => {
    @authModule = new @authModule();
  });

  it('should create an instance', () => {
    expect(@authModule).toBeTruthy();
  });
});
