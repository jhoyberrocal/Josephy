import { newSpecPage } from '@stencil/core/testing';
import { JhList } from '../jh-list';

describe('jh-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JhList],
      html: `<jh-list></jh-list>`,
    });
    expect(page.root).toEqualHtml(`
      <jh-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jh-list>
    `);
  });
});
