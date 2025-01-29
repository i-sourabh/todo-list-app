import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.active ? "#007bff" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

const Filters = ({ filter, setFilter }) => {
  return (
    <FilterContainer>
      {/* <FilterButton active={filter === "all"} onClick={() => setFilter("all")}> */}
      <FilterButton active={filter === "all" ? "true" : undefined} onClick={() => setFilter("all")}>

        All
      </FilterButton>
      {/* <FilterButton active={filter === "active"} onClick={() => setFilter("active")}> */}
      <FilterButton active={filter === "active" ? "true" : undefined} onClick={() => setFilter("active")}>

        Active
      </FilterButton>
      {/* <FilterButton active={filter === "completed"} onClick={() => setFilter("completed")}> */}
      <FilterButton active={filter === "completed" ? "true" : undefined} onClick={() => setFilter("completed")}>

        Completed
      </FilterButton>
    </FilterContainer>
  );
};

export default Filters;
