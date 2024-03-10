import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * "mx-auto w-full max-w-screen-xl px-4 md:px-20" -> default tailwind classes
 * @description MaxWidthWrapper is a wrapper component that wraps the content to be displayed in the center of the screen.
 * @param {string} className
 * @param {ReactNode} children
 * @returns {ReactNode} MaxWidthWrapper component with children and className props passed to it.
 * @example <MaxWidthWrapper className="">{children}</MaxWidthWrapper>
 *
 */
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-4 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;