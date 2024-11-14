"use client";

import useTodosController from "@/app/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";
import React, { useEffect } from "react";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
    onUpdateTodos,
  } = useTodosController();
  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        ownerUserId="123"
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        // onUpdate={(id, content) => {
        //   onUpdateTodos(id, content);
        // }}
        //위의 코드는 축약해서
        onUpdate={onUpdateTodos} //이렇게 줄일 수도 있다
        onCreate={onCreateEmptyTodos}
        // {() => {
        //   onCreateEmptyTodos();
        // }}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};
export default TodoContainer;
