import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchPhoto from '../../Service/apiService';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal/Modal';
import Button from '../Button/';
import Loader from '../Loader/';

import s from './ImageGallery.module.css';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const bigImage = { alt: '', src: '' };

function ImageGallery({ queryString, page, onClick }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getPhoto = (nextQueryString, nextPage) => {
      fetchPhoto(nextQueryString, nextPage)
        .then(data => {
          const arrayImages = [];
          if (data.hits.length === 0) {
            return Promise.reject(new Error(`Данных для отображения нет`));
          }

          data.hits.forEach(element => {
            const { id, webformatURL, largeImageURL, tags } = element;
            arrayImages.push({ id, webformatURL, largeImageURL, tags });
          });
          return arrayImages;
        })
        .then(arrayImages => {
          setImages(prevImages => [...prevImages, ...arrayImages]);
          setStatus(Status.RESOLVED);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    };

    if (!queryString || !page) {
      return;
    }
    setStatus(Status.PENDING);
    getPhoto(queryString, page);
  }, [queryString, page]);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onClickImage = event => {
    bigImage.alt = event.target.alt;
    bigImage.src = event.target.dataset.big_img;
    toggleModal();
  };

  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem images={images} onClickImage={onClickImage} />
      </ul>

      {status === Status.RESOLVED && <Button onClick={onClick} />}

      {status === Status.PENDING && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigImage.src} alt={bigImage.alt} />
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  queryString: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
