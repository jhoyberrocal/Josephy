import { newE2EPage } from '@stencil/core/testing';

describe('jh-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jh-button></jh-button>');

    const element = await page.find('jh-button');
    expect(element).toHaveClass('hydrated');
  });
});
