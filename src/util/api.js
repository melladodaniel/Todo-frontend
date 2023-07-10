import axios from "axios";

async function getTodos() {
    try {
        const {
            data: { todos }
        } = await axios.get("http://localhost:3000/v1/to-dos");

        return todos;
    } catch (error) {
        console.error(error.response.data);
        return [];
    }
}

async function patchTodo(todoId, newValues) {
    try {
        axios.patch(`http://localhost:3000/v1/to-dos/${todoId}`, {
            ...newValues,
            title: newValues.text,
         });
    } catch (error) {
        console.error(error.response.data);
    }
}

export { getTodos, patchTodo }