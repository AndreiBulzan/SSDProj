import React from 'react';


class InputField extends React.Component {
    render() {
        return (
            <input value={this.props.value} onChange={this.props.onChange}/>
        );
    }

}

export default InputField;
