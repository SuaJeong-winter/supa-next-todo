import {createBrowserClient} from "@supabase/ssr";
import {Database} from "@/database.types"
// @는 루트 경로를 나타냄

export const createSupabaseBrowserClient = ()=>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
// 여기서 뒤의 !는 해당 데이터가 확실히 존재한다는 것을 알려줌으로써 오류를 삭제함
