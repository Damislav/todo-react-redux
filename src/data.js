import { v4 as uuidv4 } from "uuid";

export const todos = [
  {
    title: "I love redux",
    editing: false,
    checkbox: true,
    id: uuidv4(),
  },
  {
    title: "The redux song",
    editing: false,
    checkbox: false,
    id: uuidv4(),
  },
  {
    title: "Run to the redux hill",
    editing: false,
    checkbox: false,
    id: uuidv4(),
  },
];
