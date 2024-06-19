import { newSpecPage } from '@stencil/core/testing';
import { JhBadge } from '../jh-badge';

describe('jh-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JhBadge],
      html: `<jh-badge></jh-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <jh-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jh-badge>
    `);
  });
});
