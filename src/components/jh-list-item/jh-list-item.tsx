import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';
import { VARIANTS } from '../../utils/types';

@Component({
  tag: 'jh-list-item',
  shadow: false,
  scoped: true,
})
export class JhListItem {
  @Prop() active?: boolean;
  @Prop() disabled?: boolean;
  @Prop() actionable?: boolean;
  @Prop() variant?: VARIANTS;
  render() {
    return (
      <Host class={
        classNames([
          'list-group-item',
          {
            'active': this.active,
            'disabled': this.disabled,
            'list-group-item-action': this.actionable,
            [`list-group-item-${this.variant}`]: this.variant,
          }
        ])
        }>
        <slot></slot>
      </Host>
    );
  }

}
