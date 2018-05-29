import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from "./actions";

/*is that necessary ??*/
const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments
            ];
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, text: action.text}
                }
            });

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
            });
        default:
            return state;
    }
}

