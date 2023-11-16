import axios from "axios";

const endpoint = "https://qtify-backend-labs.crio.do";
const getTopAlbum = async () => {
  try {
    const responseTopAlbum = await axios.get(`${endpoint}/albums/top`);
    return responseTopAlbum.data;
  } catch (e) {
    return [];
  }
};

const getNewAlbum = async () => {
  try {
    const responseNewAlbum = await axios.get(`${endpoint}/albums/new`);
    return responseNewAlbum.data;
  } catch (e) {
    return [];
  }
};

const getSongsAlbum = async () => {
  try {
    const responseSongsAlbum = await axios.get(`${endpoint}/songs`);
    return responseSongsAlbum.data;
  } catch (e) {
    return [];
  }
};

const getGenres = async () => {
  try {
    const responseGenres = await axios.get(`${endpoint}/genres`);
    return responseGenres.data;
  } catch (e) {
    return [];
  }
};

export { getTopAlbum, getNewAlbum, getSongsAlbum, getGenres };
