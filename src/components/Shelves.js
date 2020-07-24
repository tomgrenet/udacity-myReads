//Shelves.js
//Display all shelves 

//TO DO
//HIDE h1 if there is no book with this status
//Merge with Shelf

import React from 'react';
import Shelf from './Shelf'

const shelves = (props) => {
    return(
        <div>
            <h1>Reading</h1>
            <Shelf {...props} status = 'Reading' />
            <h1>Wanna read</h1>
            <Shelf {...props} status = 'Wanna read' />
            <h1>Read</h1>
            <Shelf {...props} status = 'Read' />
        </div>
    );
}

 export default shelves