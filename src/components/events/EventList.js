import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchAll, eventListSelector} from '../../ducks/events';
import Loader from '../common/Loader';

export class EventList extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  
  render() {
    if (this.props.loading) return <Loader />;
    
    return (
      <div>
        <table>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    )
  }
  
  getRows() {
    return this.props.events.map(this.getRow);
  }
  
  getRow = (event) => {
    return (
      <tr key={event.uid} className="test--event-list_row" onClick={this.handleRowClick(event.uid)}>
        <td>{event.title}</td>
        <td>{event.where}</td>
        <td>{event.month}</td>
      </tr>
    )
  };
  
  handleRowClick = (uid) => () => {
    const {selectEvent} =this.props;
    selectEvent && selectEvent(uid);
  }
}

export default connect(state => ({
  //events: state[moduleName].entities
  events: eventListSelector(state),
  loading: state[moduleName].loading
}), {fetchAll})(EventList);