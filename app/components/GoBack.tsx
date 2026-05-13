"use client";
import React from "react";
import { type MouseEvent } from "react";

function GoBack() {
    //  way 1 sends e object
  // const hdlGoBack = (e: MouseEvent<HTMLButtonElement>): void => {
  // history.back();
  // }

// way 2 handle the function directly
  const hdlGoBack: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    history.back();
  };

  return (
    <div>
      <button
        type="button"
        className="border p-2 rounded bg-slate-400 hover:bg-blue-700 hover:text-white w-25"
        onClick={hdlGoBack}
      >
        Go Back
      </button>
    </div>
  );
}

export default GoBack;
