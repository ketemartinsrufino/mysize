

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const ElementListItem = ( { item, onEdit, onDisable } ) => {
    const deleteButton = ( onDisable ? 
                            <i className="far fa-trash-alt" onClick={onDisable}> X</i> : 
                            null);
    
    return (
        <li className="list-item" key={item.key}>
            {deleteButton}
            <div className="item-info" onClick={onEdit}>
                {`${item.description} (${item.unit})`}
            </div>
        </li>
    );
};

export default ElementListItem;