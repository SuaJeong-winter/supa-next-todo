import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import ClientComponentTest from "./components/ClientComponentTest";
import { getTodoAction } from "@/actions/todo/todo.action";

const page = async () => {
  // 서버 컴포넌트이기 때문에 async
  console.log(">>SSR start");
  const result = await getTodoAction();
  // await sleep(1500); //1.5초
  console.log("SSR end");
  return (
    <>
      todo page {JSON.stringify(result)}
      <ClientComponentTest />
    </>
  );
};
export default page;
