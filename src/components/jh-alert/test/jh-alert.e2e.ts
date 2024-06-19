import { newE2EPage } from '@stencil/core/testing';

describe('jh-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jh-alert></jh-alert>');

    const element = await page.find('jh-alert');
    expect(element).toHaveClass('hydrated');
  });
});
