import { Task } from "@/types/types";
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Follow up with Alice Johnson",
    description: "Send proposal for website redesign",
    priority: "high",
    status: "today",
    dueDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Prepare demo for Bob Smith",
    description: "Create custom demo for Design Studio",
    priority: "medium",
    status: "upcoming",
    dueDate: new Date(Date.now() + 86400000).toISOString(),
    createdAt: new Date().toISOString(),
  },
];
export default sampleTasks;
