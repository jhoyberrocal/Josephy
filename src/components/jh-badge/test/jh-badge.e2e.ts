import { newE2EPage } from '@stencil/core/testing';

describe('jh-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jh-badge></jh-badge>');

    const element = await page.find('jh-badge');
    expect(element).toHaveClass('hydrated');
  });
});
