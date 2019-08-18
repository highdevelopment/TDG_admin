import { FeeModule } from './fee.module';

describe('FeeModule', () => {
  let feeModule: FeeModule;

  beforeEach(() => {
    feeModule = new FeeModule();
  });

  it('should create an instance', () => {
    expect(feeModule).toBeTruthy();
  });
});
