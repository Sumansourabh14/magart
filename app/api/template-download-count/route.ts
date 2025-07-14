import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("id");
  console.log({ param });

  return NextResponse.json({ success: true, param });
}
