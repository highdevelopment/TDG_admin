import { AsModule } from './as.module';

describe('AsModule', () => {
  let asModule: AsModule;

  beforeEach(() => {
    asModule = new AsModule();
  });

  it('should create an instance', () => {
    expect(asModule).toBeTruthy();
  });
});
