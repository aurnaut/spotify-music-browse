import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import './SearchEvent.css';
import { searchEvent } from '../../actions/filterActions';

class SearchEvent extends Component {

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Filter by name...'
                    name='search'
                    onChange={this.props.searchEvent.bind(this)} />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events.items
    };
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            searchEvent: searchEvent
        },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchEvent);