import { Author } from "./author";

export interface CourseDomain {
  id?: number;
  title: string;
  creatingDate: string;
  duration: number;
  topRated: boolean,
  description: string;
  authors?: Author[];
}
