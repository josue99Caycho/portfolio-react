import type { FC } from "react";

interface StatusPillProps {
  text: string;
  className?: string;
  dotClassName?: string;
}

export const StatusPill: FC<StatusPillProps> = ({
  text,
  className,
  dotClassName,
}) => {
  return (
    <div className={className}>
      <span className={dotClassName} />
      <span>{text}</span>
    </div>
  );
};
