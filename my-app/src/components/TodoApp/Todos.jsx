import React from 'react';
import Todo from './Todo'
class Todos extends React.Component {
    render() {

        const {todos,  deleteItem, updateChecked} = this.props;
        return (
            <div>
                {todos.map(todo => {
                    return <Todo todo = {todo}
                    deleteItem = {deleteItem}
                    updateChecked = {updateChecked} 

                    />
                })}
        </div>
        );
    }

}

export default Todos;
