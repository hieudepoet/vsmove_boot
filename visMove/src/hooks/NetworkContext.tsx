import React, { createContext, useContext, useState, ReactNode } from "react";
export type suiNetwork = 'mainnet' | 'testnet' | 'devnet'
type NetworkContextType = {
  currNetwork: suiNetwork;
  setCurrNetwork: (network: suiNetwork) => void;
};

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [currNetwork, setCurrNetwork] = useState<suiNetwork>("mainnet"); // default value

  return (
    <NetworkContext.Provider value={{ currNetwork, setCurrNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error("useNetwork must be used within a NetworkProvider");
  }
  return context;
};