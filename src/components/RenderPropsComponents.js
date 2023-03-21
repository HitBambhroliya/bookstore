import React, { Component } from 'react'

class RenderPropsComponents extends Component {
  render() {
    return (
      this.props.render()
    )
  }
}

export default RenderPropsComponents
