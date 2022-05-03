import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  children: JSX.Element;
  onClose: Function;
}

export default function Modal(props: ModalProps) {
  const el = document.createElement('div') as HTMLElement;
  el.classList.add('overlay', 'd-flex', 'flex-column');
  el.setAttribute('data-testid', 'overlay');
  el.onclick = (event: MouseEvent) => handleClick(event);
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  useEffect(() => {
    modalRoot?.appendChild(el);
  });

  function closeModal() {
    if (modalRoot?.contains(el)) {
      modalRoot.removeChild(el);
      props.onClose();
    }
  }

  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target === el || target.className === 'close-img' || target.id === 'close-button') {
      closeModal();
    }
  }

  return ReactDOM.createPortal(
    <div className="my-1 d-flex flex-column align-self-center modal-wrapper">
      <button className="align-self-end close-button" id="close-button" aria-label="close modal">
        <img src="./svg/close.svg" className="close-img" alt="" />
      </button>
      {props.children}
    </div>,
    el
  );
}
