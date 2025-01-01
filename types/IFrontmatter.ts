export interface IFrontmatter {
  title: string;
  description: string;
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp[];
  tags: string[];
  categories: string[];
  titleId: string;
}
