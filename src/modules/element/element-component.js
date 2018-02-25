import React from 'react';
import ElementList from 'modules/element/element-list';
import ElementForm from 'modules/element/element-form';

const ElementComponent = () => {
    return (
        <div className="element-container">
            <ElementForm/>
            <ElementList/>
        </div>
    )
}

export default ElementComponent;