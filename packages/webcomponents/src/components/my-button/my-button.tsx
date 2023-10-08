import { Component, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() variant: string;

  @Prop() text: string;

  @Listen('click', { capture: true })
  handleClick() {
    console.log('click');
  }

  private getText(): string {
    return this.text;
  }

  render() {
    return (
      <button onClick={this.handleClick} style={{ background: this.variant }}>
        {this.getText()}
      </button>
    );
  }
}
