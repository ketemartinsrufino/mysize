import React  from 'react';

const MeasureFormEdit = ({ jsx, save, remove} ) => {

    return jsx(
        <div>
            <button className="mdc-button mdc-button--raised" onClick={save}>Salvar</button>
            <button className="mdc-button mdc-button--raised" onClick={remove}>Excluir</button>
        </div>
    );
};

export default MeasureFormEdit;