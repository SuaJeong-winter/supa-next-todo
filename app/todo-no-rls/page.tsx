import {sleep} from "@/lib/utils"

const page = async () => {
  // throw new Error("custom error")
  console.log("API call start")
  await sleep(1500)
  console.log("API call end")
 return (
     <h1>page Component</h1>
 );
}
export default page