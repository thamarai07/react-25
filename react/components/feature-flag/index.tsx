import React, { useContext } from 'react';
import LightAndDark from '../light-dark';
import TreeView from '../tree-view';
import { FeatureFlagContext } from './context';

export default function FeatureFlag() {

  const {} = useContext(FeatureFlagContext)

  const ComponentsToRender = [
    {
      id :1,
      key : "ShowLightDarkTheme",
      component : <LightAndDark/>
    },
    {
      id :2,
      key : "ShowTreeView",
      component : <TreeView/>
    }
  ]
  return (
    <>
        <h1 className='text-center mt-10 mb-10 font-semibold text-[32px]' >FeatureFlag</h1>
    </>
  );
}
