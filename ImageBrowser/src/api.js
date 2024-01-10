import axios from 'axios'

const searchImages = async() => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      // Accept-Version: v1,
      Authorization: 'Client-ID eu-t2yUy8uhqXHqLc7bafwnXEbYlurukjRWsFXtdObc'
    },
    params: {
      query: 'cars'
    },
  });

  console.log(response)
  return response;
};

export default searchImages;