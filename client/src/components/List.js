import React from 'react';
import '../App.css';

export const List = ({children}) => {
    return (
        <div className="list-container">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    )
}