"use server";

import { createServerSideClient } from "@/lib/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  return result.data;
};

// todoList 가져오기 + by id
export const getTodosById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id); //특정 id 값과 동일한 데이터를 가져옴
  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}`)
    .order("id", { ascending: false })
    .limit(500);
  // ilike란 terms의 대소문자를 구분하지 않고 search를 진행한다는 의미
  // 만약 해당되는 데이터가 너무 많은 경우 limit를 통해 데이터를 최대 500개까지만 받아오도록
  return result.data;
};

// todoList 생성하기
export const createTodos = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .insert({
      content: content,
      // 이처럼 key와 value가 같다면 그냥 content로만 써도 된다
    })
    .select();
  return result.data;
};

// todoList 업데이트 하기
export const updateTodos = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      content: content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();
  return result.data;
};

//todoList softDelete
export const deleteTodosSoft = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();
  return result.data;
};
