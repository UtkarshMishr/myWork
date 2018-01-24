import Api from '@/api/index'

/*
export default {
  register (credentials) {
    return Api().post('/user', credentials)
  }
}
*/

var register = function (credentials) {
  return Api().post('/user', credentials)
}

export default {
  register
}
