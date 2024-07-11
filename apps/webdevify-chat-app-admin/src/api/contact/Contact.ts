import { User } from "../user/User";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  contactUser: string | null;
};
