import { newSpecPage } from '@stencil/core/testing';
import { JhButton } from '../jh-button';

describe('jh-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JhButton],
      html: `<jh-button></jh-button>`,
    });
    expect(page.root).toEqualHtml(`
      <jh-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jh-button>
    `);
  });
});
