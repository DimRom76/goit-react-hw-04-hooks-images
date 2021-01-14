import { useState } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal/';
import Button from '../Button/';
import Loader from '../Loader/';

import STATUS from '../../Service/apiStatus';

import s from './ImageGallery.module.css';

const bigImage = { alt: '', src: '' };

function ImageGallery({ images, status, onClick, error }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onClickImage = event => {
    bigImage.alt = event.target.alt;
    bigImage.src = event.target.dataset.big_img;
    toggleModal();
  };

  if (status === STATUS.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem images={images} onClickImage={onClickImage} />
      </ul>

      {status === STATUS.RESOLVED && <Button onClick={onClick} />}

      {status === STATUS.PENDING && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigImage.src} alt={bigImage.alt} />
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
