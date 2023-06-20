import * as React from "react";
import cls from "classnames";

export const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return <hr className={cls(className, "h-px bg-slate-600")} />;
};
