import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactUpdateInput = {
  user?: UserWhereUniqueInput | null;
  contactUser?: string | null;
};
