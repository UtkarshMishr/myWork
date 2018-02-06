import Api from '@/api/index'

var authentication = function () {
  return Api().get('/login')
}

export default {
  authentication
}
