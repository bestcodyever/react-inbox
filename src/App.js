import React, { Component } from 'react';
import './App.css';
import MessageList from './components/messageList';
import messageData from './db/messageData'
import ToolBar from './components/toolBar'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      messages: messageData
    }
  }
  toggleStar = (message) => {
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].starred ?
        prevState.messages[index].starred = false :
        prevState.messages[index].starred = true
    })
  }
  toggleSelected = (message) => {
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].selected ?
        prevState.messages[index].selected = false :
        prevState.messages[index].selected = true
    })
  }
  toggleSelectAll = () => {
    let lengthOfMessages = this.state.messages.length
    let selected = messageData.filter(item => item.selected === true).length
        if (lengthOfMessages > selected) {
          let newMessages = this.state.messages.map((message,i)=>{
              message.selected = true

              return message
            })
            this.setState({
              messages: newMessages
            })
       }
      else {
        console.log(this.state.messages);
        let newMessages = this.state.messages.map((message,i)=>{
            message.selected = false
            console.log(newMessages);
            return message

          })
          this.setState({
            messages: newMessages
          })
        }
    }
  markAsRead = () => {
    let readMessages = this.state.messages.map((message,i) => {
      if (message.selected === true) {
        message.read = true
      }
      return message
    })
    this.setState({
      messages: readMessages
    })
  }

  markAsUnread = () => {
    let unreadMessages = this.state.messages.map((message,i) => {
      if (message.selected === true) {
        message.read = false
      }
      return message
    })
    this.setState({
      messages: unreadMessages
    })
  }


  render() {
    return (
      <div>
      <ToolBar messageData={messageData} markAsRead={ this.markAsRead.bind(this)} markAsUnread={ this.markAsUnread.bind(this)} toggleSelectAll={ this.toggleSelectAll.bind(this)} />
      <MessageList messageData={messageData} isRead={ this.isRead } isStar={ this.isStar }  toggleSelected={ this.toggleSelected.bind(this) } toggleStar={ this.toggleStar.bind(this) } />
      </div>
    )
  }
}

export default App;
