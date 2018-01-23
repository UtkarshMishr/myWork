import Api from '@/api/index'

export default {
  register (credentials) {
    console.log('Hello' + JSON.stringify(credentials))
    return Api().post('/user', credentials)
  }
}
