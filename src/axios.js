import axios from 'axios';

const instance=axios.create({
    // base url to make requests to the movie database  
    baseURL:'https://api.themoviedb.org/3',
});

export default instance;