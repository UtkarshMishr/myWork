import Api from '@/api/index'

/*
export default {
  searchUsers () {
    return Api().get('/userSearch')
  }
}
*/

var searchUsers = function (query) {
  return Api().post('/userSearch', query)
}

export default {
  searchUsers
}
