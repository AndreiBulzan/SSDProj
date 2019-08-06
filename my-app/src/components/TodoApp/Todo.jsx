import React from 'react';


class Todo extends React.Component {
    render() {

        const {todo, deleteItem, updateChecked} = this.props;
        const styles = 
        {
            color: todo.checked ? 'blue' : 'intial'
        }
        return (
            <div>
                                <input type="checkbox"
                                checked={todo.checked}
                            
                                onClick={()=>updateChecked(todo.id)}/>
                                <span style={styles} className = {todo.checked ? 'line-through' : ''}>
                {todo.name}
                </span>
                <input type="button" value="X"
                onClick={()=>deleteItem(todo.id)}
                />
        </div>
        );
    }

}

export default Todo;
