import { ManualModule } from './manual.module';

describe('ManualModule', () => {
  let manualModule: ManualModule;

  beforeEach(() => {
    manualModule = new ManualModule();
  });

  it('should create an instance', () => {
    expect(manualModule).toBeTruthy();
  });
});
