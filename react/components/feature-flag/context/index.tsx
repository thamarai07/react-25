import { createContext } from "react";

const featureFlags = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  return <featureFlags.Provider value={{}}>{children}</featureFlags.Provider>;
}
