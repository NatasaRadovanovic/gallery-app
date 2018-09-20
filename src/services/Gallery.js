import axios from 'axios'

export default class Gallery{

    constructor(){
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll(){
        return axios.get('galleries')
        .then((response ) => response.data)
    }

    getNextPage(nextPage){
        return axios.get(`${nextPage}`)
    }

    get(id){
        return axios.get(`galleries/${id}`)
    }

    getAuthorGalleries(id){
        return axios.get(`authors/${id}`)
    }

    addGallery(gallery){
        return axios.post('galleries', gallery)
    }

    getOwnersGalleries(){
        return axios.get('my-galleries')
    }

    /*addComment(comment, galleryId) {
        return axios.post(`galleries/${galleryId}/comment`, comment)
      }*/
}

export const galleries = new Gallery();