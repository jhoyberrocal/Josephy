import { newSpecPage } from '@stencil/core/testing';
import { JhListItem } from '../jh-list-item';

describe('jh-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JhListItem],
      html: `<jh-list-item></jh-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <jh-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jh-list-item>
    `);
  });
});
