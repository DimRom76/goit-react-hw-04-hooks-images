import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchPhoto from './Service/apiService';
import STATUS from './Service/apiStatus';

import './App.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

function App() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(0);
  const [queryString, setQueryString] = useState('');
  const [images, setImages] = useState([]);

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
          setStatus(STATUS.RESOLVED);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          setError(error);
          setStatus(STATUS.REJECTED);
        });
    };

    if (!queryString || !page) {
      return;
    }
    setStatus(STATUS.PENDING);
    getPhoto(queryString, page);
  }, [queryString, page]);

  const onSubmit = values => {
    setImages([]);
    setPage(1);
    setQueryString(values);
  };

  const onClickButtomLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        status={status}
        error={error}
        onClick={onClickButtomLoadMore}
        images={images}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
