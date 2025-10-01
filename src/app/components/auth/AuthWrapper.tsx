"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface RequireAuthProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<RequireAuthProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login"); // redirect to login
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
