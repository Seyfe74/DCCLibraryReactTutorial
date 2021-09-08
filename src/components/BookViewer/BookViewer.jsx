import React from 'react';
import Book from '../Book/Book';

const BookViewer =(props) => {
    return(
        <div className="row row-spacer">
        <div className= "col-md-4"> 
        {/* Previous book button*/}
        <button onClick= {props.previousBook}>Previous Book</button>
        </div>
        <div className= "col-md-4">
            {/* Display book button*/}
            <Book book= {props.book} />
        </div>
        
        <div className= "col-md-4">
            {/* Next book button*/}
            <button onClick= {props.nextBook}>Next Book</button>
            </div>
            </div>

    );
}
export default BookViewer;