import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ITask } from "../../../types/ITask";

const dbPath = path.join(process.cwd(), "src", "db", "db.json");

function readTasksFromFile(): ITask[] {
  const fileData = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(fileData);
}

function writeTasksToFile(tasks: ITask[]) {
  fs.writeFileSync(dbPath, JSON.stringify(tasks, null, 2));
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  
  let taskList = readTasksFromFile(); 
  let filterTask = taskList;

  if (!status) return NextResponse.json(filterTask);

  if (status === "completed") {
    filterTask = taskList.filter((task) => task.completed);
  } else {
    filterTask = taskList.filter((task) => !task.completed);
  }

  return NextResponse.json(filterTask);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) return NextResponse.json({ message: "La tarea no es válida" }, { status: 400 });

  if (!body.date || !body.description || !body.name) {
    return NextResponse.json({ message: "La tarea no es válida" }, { status: 400 });
  }

  const taskList = readTasksFromFile(); 
  const newTask: ITask = { id: Date.now(), completed: false, ...body };
  taskList.push(newTask);

  writeTasksToFile(taskList);  
  return NextResponse.json(newTask, { status: 201 });
}
