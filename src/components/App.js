import React from 'react';
import EventList from './EventList';

const App = () => (
    <div className='row mt-5'>
        <div className='col-md-4 offset-md-1'>
            <h2>Events</h2>
            <EventList />
        </div>
    </div>
);

export default App;