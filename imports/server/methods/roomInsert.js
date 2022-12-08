import { Meteor } from 'meteor/meteor'
import { Read, Rooms } from '/imports/collections'

Meteor.methods({
  roomInsert() {
    const time = new Date
    const roomsData = {
      lastUserId: '',
      lastUserName: 'new chat room',
      lastUserAvatar: '',
      lastMessage: '새로운 채팅방이 생성되었습니다!',
      updatedAt: time,
      joiner: [this.userId],
    }
    const room_id = Rooms.insert(roomsData)

    Read.insert({
      userId: this.userId,
      roomId: room_id,
      lastAt: time,
      updatedAt: time,
    })

    return room_id
  },

})