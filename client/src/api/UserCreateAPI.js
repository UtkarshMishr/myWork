import Api from '@/api/index'

/*
export default {
  register (credentials) {
    return Api().post('/user', credentials)
  }
}
*/

var register = function (formBody) {
  return Api().post('/user', formBody)
}

export default {
  register
}
