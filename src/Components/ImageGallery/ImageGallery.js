import { Component } from 'react';
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

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = { images: [], status: '', error: null, showModal: false };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQueryString = prevProps.queryString;
    const nextQueryString = this.props.queryString;

    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevQueryString !== nextQueryString || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      this.getPhoto(prevQueryString, nextQueryString, nextPage);
    }
  }

  getPhoto(prevQueryString, nextQueryString, nextPage) {
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
        let newArrayImage;
        if (prevQueryString === nextQueryString) {
          newArrayImage = [...this.state.images, ...arrayImages];
        } else {
          newArrayImage = [...arrayImages];
        }

        this.setState({ images: newArrayImage, status: Status.RESOLVED });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickImage = event => {
    bigImage.alt = event.target.alt;
    bigImage.src = event.target.dataset.big_img;
    this.toggleModal();
  };

  render() {
    const { images, status, error, showModal } = this.state;

    if (status === status.REJECTED) {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem images={images} onClickImage={this.onClickImage} />
        </ul>

        {status === status.RESOLVED && <Button onClick={this.props.onClick} />}

        {status === status.PENDING && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={bigImage.src} alt={bigImage.alt} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  queryString: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
