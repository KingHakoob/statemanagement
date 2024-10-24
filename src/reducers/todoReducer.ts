interface Todo {
    id: number
    title: string
}

interface Action {
    type: 'ADD' | 'DELETE'
    id?: number
    todo?: Todo 
}

const todoReducer = (state: Todo[], action: Action): Todo[] => {
    if(action.type === 'ADD') return [ action.todo!, ...state ];
    else return state.filter((todo) => todo.id !== action.id);
}

export default todoReducer;
