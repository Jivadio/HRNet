import { LegacyRef, ReactNode } from "react";

export interface DropDownProps {
  name?: string;
  children?: ReactNode;
  refHook: LegacyRef<HTMLSelectElement> | undefined;
}
