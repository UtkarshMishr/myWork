import Api from '@/api/index'

var getUserbyID = function (userID) {
  return Api().get('/user/'+userID)
}

export default {
  getUserbyID
}
