import axios from 'axios';

//Creamos la instancia para configurar la URL base
const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// Interceptor de respuesta para que me solo me devuelva el data que es lo que me interesa
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const getPosts = () => {
  return http.get('/posts')
}

export const getPost = (id) => {
  return http.get(`/posts/${id}`)
}