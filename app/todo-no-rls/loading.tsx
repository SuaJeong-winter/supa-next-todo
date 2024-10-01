"use client"
// client(여기서는 브라우저)쪽으로 먼저 던져짐
import {DotLoader} from "react-spinners"

const Error = () => {
 return (
  <div className="flex flex-col items-center mt-12">
    <div>
      <DotLoader/>
    </div>
    <div className="font-bold my-2">
      Loading...
    </div>
  </div>
  );
}
export default Error;