import { Chat } from "../chat/Chat";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  timestamp: Date | null;
  sender: string | null;
  chat?: Chat | null;
};
