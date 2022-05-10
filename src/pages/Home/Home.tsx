import { useState, useEffect } from 'react';
import CardList from '../../components/CardList';
import SearchBar from '../../components/SearchBar';
import CardType from '../../types/card';
import Modal from '../../components/Modal/Modal';
import getFilmsArray from '../../Provider';
import Card from '../../components/Card/Card';

export default function Home() {
  const [data, setData] = useState<CardType[]>([]);
  const [modalData, setModalData] = useState<CardType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleShow(id: number) {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        const dataModal = Object.assign({}, data[i], { isFull: true });
        setModalData(dataModal);
        break;
      }
    }
    setShowModal(true);
  }

  function handleHide(): void {
    if (showModal === true) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('value')) {
      sendFetch(localStorage.getItem('value')!);
    }
  }, []);

  async function sendFetch(value: string) {
    setIsLoaded(false);
    try {
      const selectedInformation = await getFilmsArray(value);
      setData(selectedInformation);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      throw error;
    }
  }

  return (
    <div data-testid="home-page">
      <h1>Home</h1>
      <SearchBar
        onEnter={() => {
          if (localStorage.getItem('value')) {
            sendFetch(localStorage.getItem('value')!);
          }
        }}
      />
      {showModal ? (
        <Modal onClose={handleHide}>
          <Card {...(modalData as CardType)} />
        </Modal>
      ) : null}
      <div>
        {!localStorage.getItem('value') && <div>Search movie by title</div>}
        {localStorage.getItem('value') && !isLoaded ? (
          <div> Loading...</div>
        ) : (
          <div>
            <CardList data={data} onCardClick={handleShow} />
            {localStorage.getItem('value') && data.length === 0 && (
              <div>No results. Try another title</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
