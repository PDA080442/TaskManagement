export interface FileFolderType {
  id: number;
  name: string;
  fileCount: number;
  color: string;
  icon: string;
}

export interface FileItemType {
  id: number;
  name: string;
  size: string;
  createdAt: string;
  icon: string;
  iconColor?: string;
}