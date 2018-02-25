import React from 'react';
import MeasureForm from './measure-form';
import MeasureList from './measure-list';

const MeasureListComponent = () => {

    return (
        <div className="measure-container">
            <MeasureForm/>
            <MeasureList/>
        </div>
    )
}

export default MeasureListComponent;