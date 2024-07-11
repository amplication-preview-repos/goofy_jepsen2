import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactCreateInput = {
  user?: UserWhereUniqueInput | null;
  contactUser?: string | null;
};
