import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const addComment = text => (
    {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
);

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const removeComment = id => (
    {
        type: REMOVE_COMMENT,
        id
    }
);

const EDIT_COMMENT = 'EDIT_COMMENT';
const editComment = (text, id) => (
    {
        type: EDIT_COMMENT,
        text,
        id
    }
);

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const thumbUp = (id) => (
    {
        type: THUMB_UP_COMMENT,
        id,
    }
);

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
const thumbDown = (id) => (
    {
        type: THUMB_DOWN_COMMENT,
        id
    }
);