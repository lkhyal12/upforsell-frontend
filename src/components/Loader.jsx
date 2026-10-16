import React from "react";

const Loader = ({ size = "md", text = "Loading...", fullScreen = false }) => {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-9 w-9 border-[3px]",
    lg: "h-14 w-14 border-4",
  };

  const spinner = (
    <div
      role="status"
      aria-label={text}
      className="flex flex-col items-center justify-center gap-3"
    >
      <div
        className={`${sizes[size] ?? sizes.md} animate-spin rounded-full border-emerald-100 border-t-emerald-600 `}
      />

      <span className="sr-only">{text}</span>
    </div>
  );
  if (fullScreen)
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white ">
        {spinner}
      </div>
    );
  return (
    <div className="flex w-full items-center justify-center h-full">
      {spinner}
    </div>
  );
};

export default Loader;
