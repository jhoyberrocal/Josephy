import { Component, EventEmitter, Host, Prop, h, Event, Element } from '@stencil/core';
import classNames from 'classnames';
import { VARIANTS } from '../../utils/types';

@Component({
  tag: 'jh-alert',
  shadow: false,
  scoped: true,
})
export class JhAlert {
  alertItem?: HTMLInputElement;
  @Prop() variant?: VARIANTS;
  @Prop() dismissible?: boolean;
  @Element() el!: HTMLElement;
  @Event() close!: EventEmitter;

  dismissAlert() {
    this.el.querySelector('.alert').addEventListener("transitionend",() => { 
      this.el.remove(); 
      this.close.emit();
    });
    this.el.querySelector('.alert').classList.remove('show');
  }
  render() {
    const DismissibleButton = () => {
      if (this.dismissible) {
        return (<button type="button" class="btn-close" aria-label="Close"></button>)
      }
    }
    return (
      <Host
        id="alert-jh"
        ref={(el) => this.alertItem = el as HTMLInputElement}
      >
        <div
          class={classNames([
            'alert', {
              [`alert-${this.variant}`]: this.variant,
              [`alert-dismissible fade show`]: this.dismissible,
            }
          ])
        } role="alert" onClick={() => this.dismissAlert()}>
          <slot></slot>
          <DismissibleButton />
        </div>
      </Host>
    );
  }
}
