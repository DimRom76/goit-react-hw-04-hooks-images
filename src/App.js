import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

function App() {
  const [page, setPage] = useState(0);
  const [queryString, setQueryString] = useState('');

  const onSubmit = values => {
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
        queryString={queryString}
        page={page}
        onClick={onClickButtomLoadMore}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
