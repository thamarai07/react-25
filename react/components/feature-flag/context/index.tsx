import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../dummydata";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setloading] = useState(false);
  const [featureFlag, setfeatureFlag] = useState({});

  async function fethFeatureFlag(params: any) {
    try {
      setloading(true);
      const response = await featureFlagDataServiceCall();
      setfeatureFlag(response);
      setloading(true);

    } catch (e: any) {
      console.log(e.message);
      throw new Error();
      setloading(false);

    }
  }

  useEffect(() => {
    fethFeatureFlag();
  }, []);

  return <FeatureFlagContext.Provider value={{featureFlag,loading}}>{children}</FeatureFlagContext.Provider>;
}
