import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Task from "@/models/task";

// GET
export async function GET() {
  await connectDb();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

// POST
export async function POST(req: Request) {
  await connectDb();

  const { title, description } = await req.json();

  if (!title) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }

  const newTask = await Task.create({
    title,
    description,
    completed: false,
  });

  return NextResponse.json(newTask);
}