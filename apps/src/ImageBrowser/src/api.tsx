import axios from 'axios'

const searchImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      "Accept-Version": "v1",
      Authorization: 'Client-ID eu-t2yUy8uhqXHqLc7bafwnXEbYlurukjRWsFXtdObc'
    },
    params: {
      query: term
    },
  });

  console.log(response.data.results)
  return response.data.results;
};

export default searchImages;