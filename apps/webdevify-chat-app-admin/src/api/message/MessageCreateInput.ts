import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageCreateInput = {
  text?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  chat?: ChatWhereUniqueInput | null;
};
