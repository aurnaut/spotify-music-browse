import React from 'react';
import EventList from './EventList/EventList';
import Header from './Header/Header';

const App = () => (
    <div className='row'>
        <div className='col-md-12'>
            <Header />
            <EventList />
        </div>
    </div>
);

export default App;