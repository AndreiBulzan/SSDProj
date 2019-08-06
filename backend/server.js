const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

let todos=[];

app.get('/', (req,res)=>{
    res.send('Hello from server')
}
)

app.post('/delete/:id', (req,res)=>{
    const id = req.params.id;
    let index = todos.findIndex( x=> x.id === id);
    todos.splice(index,1);
    res.send({success:true, deleteId : id});
}
)
app.post('/checked/:id', (req,res)=>{
    const id = req.params.id;
    let index = todos.findIndex( x=> x.id === id);
    todos[index] = {
        ...todos[index],
        checked: !todos[index].checked
    }
    res.send({success:true});
}
)
app.post('/add', (req,res)=>{
    const todo = req.body.todo;
    todos.push(todo);
    console.log('todos',todos);
    res.send({success:true});
}
)
app.get('/getTodos', (req,res)=>{
    res.send({todos})
}
)

app.listen(4000, (req, res)=>
{
    console.log('Server is running')
})