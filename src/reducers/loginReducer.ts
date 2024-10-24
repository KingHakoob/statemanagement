interface Action {
    type: 'LOGIN' | 'LOGOUT'
    username?: string
}

const loginReducer = (state: string, action: Action): string => {
    if(action.type === 'LOGIN') return action.username!;
    return '';
}

export default loginReducer;