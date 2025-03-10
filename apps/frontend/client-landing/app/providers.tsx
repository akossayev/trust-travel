import React, { ReactNode } from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
