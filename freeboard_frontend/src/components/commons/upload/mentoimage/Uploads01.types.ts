import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  onChangeFiles: (file: File, index: number) => void;
  defaultFileUrl?: string;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultFileUrl?: string;
}
