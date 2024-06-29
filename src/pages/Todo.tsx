import TodoContainer from "@/components/todo/TodoContainer"
import Container from "@/components/ui/Container"

const Todo = () => {
    return (
        <Container>
            <h1 className="text-2xl font-semibold text-center py-10">My Todo List</h1>
            <TodoContainer />
        </Container>
    )
}

export default Todo