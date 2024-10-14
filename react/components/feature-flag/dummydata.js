const dummycontextData = {
    ShowLightDarkTheme : true,
    ShowTreeView : true
}

function featureFlagDataServiceCall(){
    return new Promise((resolve,reject)=>{
        if(dummycontextData) setTimeout(resolve(dummycontextData),500);
        else reject("Some Error Occur")
    })
}


export default featureFlagDataServiceCall;