import Api from '@/api/index'

/*
export default {
  searchUsers () {
    return Api().get('/userSearch')
  }
}
*/

var searchUsers = function () {
  return Api().get('/userSearch')
}

export default {
  searchUsers
}
