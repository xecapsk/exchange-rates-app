"use client";

export const LogoutIcon = () => {
  return (
    <div
      onClick={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
      className="cursor-pointer w-full h-full flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59l3.59-3.59L7 8.41 8.41 7l3.59 3.59L15.59 7 17 8.41l-3.59 3.59L17 15.59z"
        />
      </svg>
    </div>
  );
};
