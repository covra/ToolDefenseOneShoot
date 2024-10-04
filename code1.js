gdjs.MenuMapCode = {};
gdjs.MenuMapCode.localVariables = [];
gdjs.MenuMapCode.GDbtn_9595levelObjects1= [];
gdjs.MenuMapCode.GDbtn_9595levelObjects2= [];
gdjs.MenuMapCode.GDbtn_9595levelObjects3= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects1= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects2= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects3= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects1= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects2= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects3= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects1= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects2= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects3= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects1= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects2= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects3= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3= [];


gdjs.MenuMapCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};gdjs.MenuMapCode.asyncCallback12581092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuMapCode.localVariables);

{ //Subevents
gdjs.MenuMapCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuMapCode.localVariables.length = 0;
}
gdjs.MenuMapCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuMapCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuMapCode.asyncCallback12581092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuMapCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_level"), gdjs.MenuMapCode.GDbtn_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595levelObjects1.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595levelObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595levelObjects1[k] = gdjs.MenuMapCode.GDbtn_9595levelObjects1[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Music\\Click_01.aac", false, 60, 1);
}
{ //Subevents
gdjs.MenuMapCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\Music\\Menu.aac", true, 50, 0.8);
}}

}


};

gdjs.MenuMapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects3.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3.length = 0;

gdjs.MenuMapCode.eventsList2(runtimeScene);
gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects3.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3.length = 0;


return;

}

gdjs['MenuMapCode'] = gdjs.MenuMapCode;
