import axios from 'axios'

const axiosActual = axios.create({
  baseURL: 'https://dhfakestore2.herokuapp.com/api/'
})

export default axiosActual
