import Api from '@/api/index'

export default {
  register (credentials) {
    return Api().post('/user', credentials)
  }
}
