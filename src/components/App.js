import React from 'react';
import EventList from './EventList/EventList';
import Header from './Header/Header';
import SearchEvent from './SearchEvent/SearchEvent';

const App = () => (
    <div className='row'>
        <div className='col-md-12'>
            <Header />
            <hr />
            <SearchEvent />
            <hr />
            <EventList />

        </div>
    </div>
);

export default App;