import React, { useReducer } from 'react';

interface State {
    name: string;
    email: string;
    password: string;
}

interface UpdateNameAction {
    type: typeof UPDATE_NAME;
    payload: string;
}

interface UpdateEmailAction {
    type: typeof UPDATE_EMAIL;
    payload: string;
}

interface UpdatePasswordAction {
    type: typeof UPDATE_PASSWORD;
    payload: string;
}

type Action = UpdateNameAction | UpdateEmailAction | UpdatePasswordAction;

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const updateName = (name: string): UpdateNameAction => ({
    type: UPDATE_NAME,
    payload: name,
});

const updateEmail = (email: string): UpdateEmailAction => ({
    type: UPDATE_EMAIL,
    payload: email,
});

const updatePassword = (password: string): UpdatePasswordAction => ({
    type: UPDATE_PASSWORD,
    payload: password,
});

const formReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload };
        case UPDATE_EMAIL:
            return { ...state, email: action.payload };
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};

const FormReducer: React.FC = () => {
    const initialState: State = {
        name: '',
        email: '',
        password: '',
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch(updateName(e.target.value))}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch(updateEmail(e.target.value))}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={state.password}
                    onChange={(e) => dispatch(updatePassword(e.target.value))}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormReducer;
