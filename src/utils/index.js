import axios from 'axios'

const axiosActual = axios.create({
  baseURL: 'http://dhfakestore2.herokuapp.com/api/'
})

export default axiosActual
