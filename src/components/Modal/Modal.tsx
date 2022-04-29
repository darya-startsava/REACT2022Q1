import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  onClose: Function;
}

export default class Modal extends React.Component<ModalProps> {
  el: HTMLElement;
  modalRoot: HTMLElement;
  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('overlay');
    this.el.setAttribute('data-testid', 'overlay');
    this.el.onclick = (event: MouseEvent) => this.handleClick(event);
    this.closeModal = this.closeModal.bind(this);
    this.modalRoot = document.getElementById('modal-root') as HTMLElement;
  }

  componentDidMount() {
    this.modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    this.closeModal();
  }

  closeModal() {
    if (this.modalRoot?.contains(this.el)) {
      this.modalRoot.removeChild(this.el);
      this.props.onClose();
    }
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      target.className === 'overlay' ||
      target.className === 'close-img' ||
      target.className === 'close-button' ||
      target.className ===
        'list-group list-group-horizontal container d-flex flex-wrap justify-content-center'
    ) {
      this.closeModal();
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
