import { newE2EPage } from '@stencil/core/testing';

describe('jh-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jh-list></jh-list>');

    const element = await page.find('jh-list');
    expect(element).toHaveClass('hydrated');
  });
});
