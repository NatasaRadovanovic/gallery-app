import axios from 'axios'

export default class Gallery{

    constructor(){
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll(){
        return axios.get('galleries')
        .then((response ) => response.data)
    }

    get(id){
        return axios.get(`galleries/${id}`)
    }

    getAuthorGalleries(id){
        return axios.get(`authors/${id}`)
    }

    add(gallery){
        return axios.post('galleries', gallery)
    }
}

export const galleries = new Gallery();