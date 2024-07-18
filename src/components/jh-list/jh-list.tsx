import { Component, h, Prop } from '@stencil/core';
import ClassNames from 'classnames';

@Component({
  tag: 'jh-list',
  shadow: false,
  scoped: true,
})
export class JhList {
  @Prop() flush?: boolean;
  @Prop() numbered?: boolean;
  @Prop() classNames?: string;
  render() {
    return (
      <div class={
        ClassNames([
          'list-group',
          this.classNames,
          {
            'list-group-flush': this.flush,
            'list-group-numbered': this.numbered,
          }
        ])
      }>
        <slot></slot>
      </div>
    );
  }

}
