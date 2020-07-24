import React from 'react'
import './Book.css'

//Render one book

const book = (props) => {
    return(
        <div className='book'>
            {/* <img src ='../image/flower.jpg' className='cover'/> */}
            <p className='title'>{props.title}</p>
            <p className='author'>{props.author}</p>
            <p className='status'>{props.status}</p>
        </div>
    )
}

export default book