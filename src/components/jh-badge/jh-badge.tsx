import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { VARIANTS } from '../../utils/types';

@Component({
  tag: 'jh-badge',
  shadow: false,
  scoped: true,
})
export class JhBadge {
  @Prop() variant?: VARIANTS;
  @Prop() pill?: boolean;
  @Prop() position?: string;
  render() {
    return (
      <Host
        class={
          classNames([
           'badge',
           {
            [`text-bg-${this.variant}`]: this.variant,
            'rounded-pill': this.pill,
            [`position-absolute ${this.position}`]: this.position,
           },
          ])
        }
      >
        <slot></slot>
      </Host>
    );
  }

}
