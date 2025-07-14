import dbConnect from "@/lib/dbConnect";
import Download from "@/models/Download";
import Stats from "@/models/Stats";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { templateId } = await req.json();
  if (!templateId)
    return NextResponse.json({ error: "Missing templateId" }, { status: 400 });

  await dbConnect();

  // Update per-template count
  const template = await Download.findOneAndUpdate(
    { templateId },
    { $inc: { count: 1 } },
    { upsert: true, new: true }
  );

  // Update global count
  const stats = await Stats.findByIdAndUpdate(
    "metadata",
    { $inc: { totalDownloads: 1 } },
    { upsert: true, new: true }
  );

  return NextResponse.json({
    message: "Counts updated",
    templateCount: template.count,
    totalDownloads: stats.totalDownloads,
  });
}
