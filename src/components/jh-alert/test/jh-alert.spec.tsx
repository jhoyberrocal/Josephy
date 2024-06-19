import { newSpecPage } from '@stencil/core/testing';
import { JhAlert } from '../jh-alert';

describe('jh-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JhAlert],
      html: `<jh-alert></jh-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <jh-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jh-alert>
    `);
  });
});
