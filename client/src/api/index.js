import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/api',
});

export const insertMovie = playload => api.post('/movie', playload);
export const getAllMovies = () => api.get('/movies');
export const updateMovieById = (id, playload) => api.put(`/movie/${id}`, playload);
export const deleteMovieById = id => api.delete(`/movie/${id}`);
export const getMovieById = id => api.get(`/movie/${id}`);

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis