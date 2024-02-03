import { MemberSummary } from "./member-summary";

export interface GroupSummary {

    groupName: string;
  totalExpenseOfGroup: number;
  members: MemberSummary[];
}
