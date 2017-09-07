import React, {Component} from 'react';
import './App.css';
import MessageList from './components/messageList';
import ToolBar from './components/toolBar'

const baseURL = 'http://localhost:8082/api'
// const baseURL = 'https://shielded-mountain-89870.herokuapp.com/apiloca'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  async componentDidMount() {
    const data = await fetch(`${baseURL}/messages`)
    const response = await data.json()
    this.setState({
      messages: response._embedded.messages.map(message => {
        message.selected = false
        return message
      })
    })
  }

  toggleStar = (message) => {
    this.setState((prevState) => {
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].starred
        ? prevState.messages[index].starred = false
        : prevState.messages[index].starred = true
    })
  }
  toggleSelected = (message) => {
    this.setState((prevState) => {
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].selected
        ? prevState.messages[index].selected = false
        : prevState.messages[index].selected = true
    })
  }

  toggleSelectAll = () => {
    let lengthOfMessages = this.state.messages.length
    let selected = this.state.messages.filter(item => item.selected === true).length
    if (lengthOfMessages > selected) {
      let newMessages = this.state.messages.map(message => {
        message.selected = true
        return message
      })
      this.setState({messages: newMessages})
    } else {
      let newMessages = this.state.messages.map(message => {
        message.selected = false
        return message

      })
      this.setState({messages: newMessages})
    }
  }
  markAsRead = () => {
    let readMessages = this.state.messages.map(message => {
      if (message.selected === true) {
        message.read = true
      }
      return message
    })
    this.setState({messages: readMessages})
  }

  markAsUnread = () => {
    let unreadMessages = this.state.messages.map(message => {
      if (message.selected === true) {
        message.read = false
      }
      return message
    })
    this.setState({messages: unreadMessages})
  }
addLabel = (label) => {
  this.setState(prevState => {
    prevState.messages.forEach(message => {
      message.selected & !message.labels.includes(label)
        ? message.labels.push(label)
        : null
    })
  })
}
removeLabel = (label) => {
  this.setState(prevState => {
    prevState.messages.forEach(message => {
      message.selected & message.labels.includes(label)
        ? message.labels.forEach((removeLabel, i) => {
          if (removeLabel === label) {
            console.log(i);
            message.labels.splice(i, i + 1)
          }
        })
        : null
    })
  })
}


  render() {
    return (
      <div>
      <ToolBar messageData={this.state.messages} addLabel={ this.addLabel.bind(this) } removeLabel={ this.removeLabel.bind(this) }  markAsRead={ this.markAsRead.bind(this)} markAsUnread={ this.markAsUnread.bind(this)} toggleSelectAll={ this.toggleSelectAll.bind(this)} />
      <MessageList messageData={this.state.messages} isRead={ this.isRead } isStar={ this.isStar }  toggleSelected={ this.toggleSelected.bind(this) } toggleStar={ this.toggleStar.bind(this) } />
      </div>
    )
  }
}

export default App;
