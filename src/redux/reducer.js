const initState = {
    filter: {
        search: '',
        status: 'All',
        priority: [],
    },
    todoList: [
        {id: 1, name: 'Learn Yoga', complete: false, priority: 'Medium'},
        {id: 2, name: 'Learn 1', complete: true, priority: 'High'},
        {id: 3, name: 'Learn 2', complete: false, priority: 'Medium'}
    ]
};

const rootReducer = (state = initState, action) => {
    console.log(state, action)
    switch (action.type) {
        case'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }

        default:
            return state;
    }
}

export default rootReducer;