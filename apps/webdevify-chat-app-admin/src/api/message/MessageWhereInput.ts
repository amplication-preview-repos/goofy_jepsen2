import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  chat?: ChatWhereUniqueInput;
};
