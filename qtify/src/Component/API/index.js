import axios from "axios";

const endpoint = "https://qtify-backend-labs.crio.do";
const getTopAlbum = async () => {
  try {
    const responseTopAlbum = await axios.get(`${endpoint}/albums/top`);
    return responseTopAlbum.data;
  } catch (e) {
    return <p>Data is not loaded</p>;
  }
};

const getNewAlbum = async () => {
  try {
    const responseNewAlbum = await axios.get(`${endpoint}/albums/new`);
    return responseNewAlbum.data;
  } catch (e) {
    return <p>Data is not loaded</p>;
  }
};

export { getTopAlbum, getNewAlbum };
