import React from 'react';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';

const MeasureListItem = ( { item, onEdit, onDelete } ) => {

    return (
        <li className="list-item" key={item.key}>
            <i className="far fa-trash-alt" onClick={onDelete}> X</i>
            <div onClick={onEdit}>

                <div>{moment(item.datacriacao).format('DD/MM/YYYY HH:mm')} </div>
                <div> Peso: {item.peso} </div>
                <div> Key: {item.key} </div>
            </div>
        </li>
    );
};

export default MeasureListItem;