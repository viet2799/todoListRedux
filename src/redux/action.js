// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 1, name: 'Learn Yoga', complete: false, priority: 'Medium'},
// }

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}