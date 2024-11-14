"use client";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const TodoListtItem = ({ todo, onDelete = () => {}, onUpdate = () => {} }) => {
  const [isEdit, setIsEdit] = useState(false); //기본적으로 edit 모드는 false
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };

  // 수정이 끝났을 때
  const onFinishEdit = () => {
    onUpdate(todo.id, userInput);
    setIsEdit(false);
  };

  //삭제 버튼을 클릭했을 때
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="min-h-[60px] bg-[#B280D9] border border-black rounded-2xl font-bold group">
      <article className="min-h-[60px] p-4 flex flex-col sm:flex-row gap-4">
        <>
          {isEdit ? (
            <input
              className="flex-1 text-[18px] "
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            ></input>
          ) : (
            <div
              onClick={onStartEdit}
              className="flex-1 text-[18px] cursor-pointer"
            >
              {todo?.content}
            </div>
          )}
        </>
        <div className="w-fit hidden group-hover:flex gap-[8px] self-end">
          {isEdit ? (
            <div
              onClick={onFinishEdit}
              className="w-[45px] h-[45px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl cursor-pointer"
            >
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div
              onClick={onStartEdit}
              className="w-[45px] h-[45px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl cursor-pointer "
            >
              <CiEdit size={30} />
            </div>
          )}

          <div
            onClick={onClickDelete}
            className="w-[45px] h-[45px] flex justify-center items-center bg-[#ED7461] border border-black rounded-2xl cursor-pointer "
          >
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};
export default TodoListtItem;