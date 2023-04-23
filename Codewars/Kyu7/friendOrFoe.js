function friend(friends){
  var friendArray = []
  for (let i = 0; i < friends.length; i++){
    if (friends[i].length == 4){
      friendArray.push(friends[i])
    }
  }
  return friendArray
}
