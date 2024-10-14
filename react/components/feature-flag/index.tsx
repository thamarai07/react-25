import React, { useContext } from 'react';
import LightAndDark from '../light-dark';
import TreeView from '../tree-view';
import { FeatureFlagContext } from './context';

export default function FeatureFlag() {

  const {featureFlag,loading} : any = useContext(FeatureFlagContext);

  console.log(loading)

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



  if(loading) return <div>Loading</div>

  const getFlagedComponent = (getcurrectComponent : any) =>{
    return featureFlag[getcurrectComponent]
  }

  return (
    <>
        <h1 className='text-center mt-10 mb-10 font-semibold text-[32px]'>FeatureFlag</h1>
        {
          ComponentsToRender.map((values)=>getFlagedComponent(values.key) ? values.component : null)
        }
    </>
  );
}
