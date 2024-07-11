import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  contactUser?: StringNullableFilter;
};
