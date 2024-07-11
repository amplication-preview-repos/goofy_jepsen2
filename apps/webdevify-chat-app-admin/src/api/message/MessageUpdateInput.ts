import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  text?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  chat?: ChatWhereUniqueInput | null;
};
