import type { FC, ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
