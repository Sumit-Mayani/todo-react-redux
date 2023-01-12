export const addtodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
        },
    };
};

export const deletetodo = (id) => {
    return {
        type: "REMOVE_TODO",
        id,
    };
};

export const removeall = () => {
    return {
        type: "REMOVE_ALL",
    };
};
