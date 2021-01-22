import { useState } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal/';

import s from './ImageGallery.module.css';

const bigImageInit = { alt: '', src: '' };

function ImageGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [bigImage, setBigImage] = useState(bigImageInit);

  const toggleModal = () => {
    if (showModal) setBigImage(bigImageInit);
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onClickImage = event => {
    setBigImage({ alt: event.target.alt, src: event.target.dataset.big_img });

    toggleModal();
  };

  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem images={images} onClickImage={onClickImage} />
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigImage.src} alt={bigImage.alt} />
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
