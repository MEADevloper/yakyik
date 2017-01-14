import React, { Component } from 'react'
import Styles from './Styles'

class Zone extends Component {
  render() {
    const Style = Styles.zone;
    const zipCode = this.props.currentZone.zipCodes[0]
    return (
      <div style={Style.container}>
        <h2 style={Style.header}>
          <a style={Style.title} href="#">{this.props.currentZone.name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br />
        <span className="detail">{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}


export default Zone
