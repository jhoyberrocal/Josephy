import { newE2EPage } from '@stencil/core/testing';

describe('jh-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jh-list-item></jh-list-item>');

    const element = await page.find('jh-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
