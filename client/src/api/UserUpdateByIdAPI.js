import Api from '@/api/index'

var updateUserbyID = function (userID, formBody) {
  return Api().put('/user/' + userID, formBody)
}

export default {
  updateUserbyID
}
