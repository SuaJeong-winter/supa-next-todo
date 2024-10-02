"use client";

import {
  deleteTodosSoft,
  getTodos,
  getTodosById,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    deleteTodosSoft(3);
  }, []);

  return <h1>TodoContainer Component</h1>;
};
export default TodoContainer;
