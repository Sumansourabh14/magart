import dbConnect from "@/lib/dbConnect";
import Stats from "@/models/Stats";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const data = await Stats.findOne();
  const totalCount = data?.totalDownloads;

  return NextResponse.json({ success: true, totalCount });
}
