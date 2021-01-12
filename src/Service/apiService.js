const KEY_API = '19471965-37c13a0c7cc27691c95ac1581';
const NumberOfPhotos = 12;
const orientation = 'horizontal';

function fetchPhoto(queryString, numberPage) {
  const str = encodeURIComponent(queryString);
  let url = `https://pixabay.com/api/?key=${KEY_API}&q=${str}&image_type=photo&page=${numberPage}&per_page=${NumberOfPhotos}&orientation=${orientation}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Ошибка получения данных`));
  });
}

export default fetchPhoto;
