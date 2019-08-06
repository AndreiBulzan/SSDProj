import React from 'react';


class HelloComponent extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}, you are {this.props.age} years old
        </div>
        );
    }

}

export default HelloComponent;
