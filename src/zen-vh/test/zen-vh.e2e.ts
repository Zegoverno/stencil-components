import { newE2EPage } from '@stencil/core/testing';

describe('zen-vh', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<zen-vh></zen-vh>');

    const element = await page.find('zen-vh');
    expect(element).toHaveClass('hydrated');
  });
});
