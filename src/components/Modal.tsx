import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface DivProps extends React.HTMLProps<HTMLDivElement> {}

export default class Modal extends React.Component<DivProps> {
  el: HTMLElement;
  constructor(props: DivProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot?.appendChild(this.el);
    console.log('Hi!');
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
