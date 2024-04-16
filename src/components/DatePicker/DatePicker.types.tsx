import { LegacyRef } from "react";

export interface DatePickerProps {
  name: string;
  refHook: LegacyRef<HTMLInputElement> | undefined;
}
