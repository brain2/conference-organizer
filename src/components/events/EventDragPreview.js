import React, {Component} from 'react';
import {connect} from 'react-redux';
import {eventSelector} from '../../ducks/events';

class EventDragPreview extends Component {
  
  render() {
    return <h1>{this.props.event.title}</h1>
  }
}

export default connect((state, props) => ({
  event: eventSelector(state, props)
}))(EventDragPreview);