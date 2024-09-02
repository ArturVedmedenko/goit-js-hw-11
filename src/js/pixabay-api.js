const BASE_URL = 'https://pixabay.com/api/';
export const fetchPhotos = searchedQ => {
  const urlParams = new URLSearchParams({
    key: '45727307-f96b67a5018b68fa33b524c91',
    q: searchedQ,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });
  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
