import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import classnames from 'classnames';
import { BUTTON_TYPES, SIZES, VARIANTS } from '../../utils/types';

@Component({
  tag: 'jh-button',
  shadow: false,
  scoped: true,
})
export class JhButton {
  @Prop() type?: BUTTON_TYPES;
  @Prop() label?: string;
  @Prop() variant?: VARIANTS;
  @Prop() disabled: boolean;
  @Prop() tagElement: string = 'button';
  @Prop() outline?: boolean;
  @Prop() size?: SIZES;
  @Prop() href?: string;
  @Prop() btnClasses?: string;
  @Event() jhClick?: EventEmitter;
  render() {
    const TagElement = this.tagElement;
    return (
      <TagElement
        type={this.type}
        class={classnames([
          'btn',
          {
            [`btn-${this.variant}`]: this.variant && !this.outline,
            [`btn-outline-${this.variant}`]: this.variant && this.outline,
            [`btn-${this.size}`]: this.size,
          },
          this.btnClasses,
        ])}
        disabled={this.disabled}
        onClick={(ev) => this.jhClick.emit(ev)}
        href={this.href}
      >
        <slot></slot>
        {this.label}
      </TagElement>
    );
  }

}
