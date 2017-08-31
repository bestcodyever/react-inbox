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
        this.state.messages.forEach((e,i)=>{
          this.setState((prevState)=>{
          prevState.messages[i].selected = true
        })
      })
    }


  render() {
    return (
      <div>
      <ToolBar messageData={messageData} toggleSelectAll={ this.toggleSelectAll.bind(this)} />
      <MessageList messageData={messageData} isRead={ this.isRead } isStar={ this.isStar }  toggleSelected={ this.toggleSelected.bind(this) } toggleStar={ this.toggleStar.bind(this) } />
      </div>
    )
  }
}

export default App;