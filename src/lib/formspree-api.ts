import Axios from 'axios';

const formspreeApi = Axios.create({
  headers: {
    Accept: 'application/json',
  },
});

export default formspreeApi;
