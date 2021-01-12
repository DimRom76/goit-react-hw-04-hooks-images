import { Component } from 'react';

import './App.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
  constructor() {
    super();
    this.state = { page: 0, queryString: '' };
  }

  onSubmit = values => {
    this.setState({ page: 1, queryString: values });
  };

  onClickButtomLoadMore = event => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { queryString, page } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          queryString={queryString}
          page={page}
          onClick={this.onClickButtomLoadMore}
        />
      </div>
    );
  }
}

export default App;
