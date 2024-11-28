import {createSlice} from  "@reduxjs/toolkit"

const initialState={
    todos:[ { id: 1, title: 'this is the todo 1', todoScheduler: '2024-10-02', completedOn: '',  isCompleted: false },
        { id: 2, title: 'this is the todo 2', todoScheduler: '2024-10-02', completedOn: '2024-10-03',  isCompleted: true },
        { id: 3, title: 'this is the todo 3', todoScheduler: '2024-10-02', completedOn: '2024-10-04',  isCompleted: false },
        { id: 4, title: 'this is the todo 4', todoScheduler: '2024-10-02', completedOn: '2024-10-01',  isCompleted: false },
        { id: 5, title: 'this is the todo 5', todoScheduler: '2024-10-02', completedOn: '2024-10-05',  isCompleted: true },
        { id: 6, title: 'this is the todo 6', todoScheduler: '2024-10-02', completedOn: '2024-10-03',  isCompleted: true },
        { id: 7, title: 'this is the todo 7', todoScheduler: '2024-10-02', completedOn: '2024-10-05',  isCompleted: true },

    ],
}

const todoSlice=createSlice({
    name: 'todos',
    initialState,
reducers:{
    addTodo:(state,action)=>{
        state.todos.push(action.payload)
    },
    removeTodo:(state,action)=>{
     state.todos=   state.todos.filter(todo=>todo.id!== action.payload.id)
    },
    editTodo:(state,action)=>{
        const {id,title,todoScheduler,completedOn,isCompleted}=action.payload
        const existingTodo=state.todos.find(todo=>todo.id===id)
        if(existingTodo){
            existingTodo.title = title
            existingTodo.completedOn = completedOn
        existingTodo.todoScheduler=todoScheduler
            existingTodo.isCompleted=isCompleted
        }
    }

}
})
export const {addTodo, removeTodo, editTodo}=todoSlice.actions;
export default todoSlice.reducer;