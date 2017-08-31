import React from 'react'
import Message from './message'

const MessageList = ({
  messageData,
   isRead,
   isStar,
   toggleStar,
   toggleSelected,
   toggleSelectAll
 }) => {
  return (
    <div>
    {messageData.map( messageData => <Message key={messageData.id} messageData={messageData} isRead={isRead}
    toggleSelected={ toggleSelected } toggleSelectAll={ toggleSelectAll}  toggleStar={ toggleStar } /> )}
  </div>
  )
}
export default MessageList
