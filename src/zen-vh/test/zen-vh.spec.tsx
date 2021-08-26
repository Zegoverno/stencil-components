import { newSpecPage } from '@stencil/core/testing';
import { ZenVh } from '../zen-vh';

describe('zen-vh', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenVh],
      html: `<zen-vh></zen-vh>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-vh>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-vh>
    `);
  });
});
