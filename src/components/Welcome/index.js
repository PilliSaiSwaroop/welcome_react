// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  onChange = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      this.setState(prevState => ({isLoggedIn: false}))
    } else {
      this.setState(prevState => ({isLoggedIn: true}))
    }
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button onClick={this.onChange}>subscribed</button>
    }
    return <button onClick={this.onChange}>subscribe</button>
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <div>{this.renderAuthButton()}</div>
      </div>
    )
  }
}

export default Welcome
