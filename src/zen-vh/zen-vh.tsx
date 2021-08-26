import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-vh',
  styleUrl: 'zen-vh.css',
  shadow: true,
})
export class ZenVh {

  render() {
    return (
      <Host>
        <span class='decoration-cone text-9xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Hello <br /> world</span>
      </Host >
    );
  }

}
