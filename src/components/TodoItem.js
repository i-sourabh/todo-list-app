import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f4f4f4;
  margin: 5px 0;
  border-radius: 5px;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <ItemContainer>
      <TaskText completed={task.completed ? "true" : undefined} onClick={() => toggleComplete(task.id)}>
        {task.title}
      </TaskText>
      <DeleteButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon color="error" />
      </DeleteButton>
    </ItemContainer>
  );
};

export default TodoItem;
