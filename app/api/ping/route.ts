import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("ping GET Api income");
  return NextResponse.json({ message: "pong" });
};
