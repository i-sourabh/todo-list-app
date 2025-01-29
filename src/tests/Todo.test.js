import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

describe("To-Do List Tests", () => {
  afterEach(cleanup);

  test("Add a task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a task...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("Mark task as completed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a task...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Task to Complete" } });
    fireEvent.click(addButton);

    const task = screen.getByText("Task to Complete");
    fireEvent.click(task);

    expect(task).toHaveStyle("text-decoration: line-through");
  });

  test("Delete a task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a task...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Task to Delete" } });
    fireEvent.click(addButton);

    const deleteButtons = screen.getAllByRole("button");
    fireEvent.click(deleteButtons[deleteButtons.length - 1]);

    expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
  });

  test("Filter tasks correctly", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a task...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Active Task" } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: "Completed Task" } });
    fireEvent.click(addButton);

    const allTasks = screen.getAllByText(/Task/);
    expect(allTasks.length).toBe(2);

    fireEvent.click(allTasks[1]);

    fireEvent.click(screen.getByText("Active"));
    expect(screen.getByText("Active Task")).toBeInTheDocument();
    expect(screen.queryByText("Completed Task")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("Completed Task")).toBeInTheDocument();
    expect(screen.queryByText("Active Task")).not.toBeInTheDocument();
  });
});