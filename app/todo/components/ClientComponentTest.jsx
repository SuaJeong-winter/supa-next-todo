"use client";
import { pingAction } from "@/actions/ping/ping.action";
import { getTodoAction } from "@/actions/todo/todo.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("handleClick result", result);
  };

  return (
    <div>
      Client ComponentTest
      <button onClick={handleClick}>Test server Actions</button>
    </div>
  );
};
export default ClientComponentTest;

// 1. ServerActions + RouteHandler
// 2. ServerActions + SSR
// 3. ServerActions + CSR
