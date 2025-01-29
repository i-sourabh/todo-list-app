import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 1rem;
`;

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ListContainer>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ListContainer>
  );
};

export default TodoList;
