import React, { Component } from 'react'
import Observer from '@researchgate/react-intersection-observer'

export default threshold => BaseComponent => {

  return class WithIntersectionObserver extends Component {
    state = {
      isIntersecting: false,
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
      this.setState({
        isIntersecting: isIntersecting && intersectionRatio >= threshold,
      })
    }

    render() {
      return (
        <Observer onChange={this.handleChange} threshold={threshold}>
          <BaseComponent isVisible={this.state.isIntersecting} />
        </Observer>
      )
    }
  }
}
