import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Component404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="page-not-found">
      <h2 className="text-not-found">Halaman tidak ditemukan ya ajg ... !</h2>
    </div>
  );
};

export default Component404;
