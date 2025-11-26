import type { FC, ReactNode } from "react";

interface CenteredPageProps {
  children: ReactNode;
}

export const CenteredPage: FC<CenteredPageProps> = ({ children }) => {
  return (
    <div className="construction-page-root">
      <div className="construction-card-root">{children}</div>
    </div>
  );
};
