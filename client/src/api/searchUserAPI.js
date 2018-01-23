import Api from '@/api/index'

export default {
  searchUsers () {
    return Api().get('/userSearch')
  }
}
