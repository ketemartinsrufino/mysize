import React, { Component } from 'react';

class FormItem extends Component {
    render() {
        const type = this.props.type || "number";
        return (
            <div className="form-item">
                <label> {this.props.label} </label>
                <input type={type} value={this.props.value} onChange={this.props.onChange}/>
            </div>

        );
    }
}

export default FormItem;
