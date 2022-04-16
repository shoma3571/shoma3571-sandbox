import { Todo } from "../types/todo"
import { TodoItem } from "./TodoItem";

type Props = {
  items: Todo[];
}

export const TodoList: React.VFC<Props> = ({ items }) => {
  return (
    <>
      {items.map(item => {
      return <TodoItem item={item} key={item.id}/>
    })}
    </>
  )
}