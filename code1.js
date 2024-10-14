gdjs.MenuMapCode = {};
gdjs.MenuMapCode.localVariables = [];
gdjs.MenuMapCode.GDbtn_9595levelObjects1= [];
gdjs.MenuMapCode.GDbtn_9595levelObjects2= [];
gdjs.MenuMapCode.GDbtn_9595levelObjects3= [];
gdjs.MenuMapCode.GDbtn_9595levelObjects4= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects1= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects2= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects3= [];
gdjs.MenuMapCode.GDspr_9595backMapObjects4= [];
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1= [];
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects2= [];
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects3= [];
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects4= [];
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects1= [];
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects2= [];
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects3= [];
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects4= [];
gdjs.MenuMapCode.GDtxt_9595poweredByObjects1= [];
gdjs.MenuMapCode.GDtxt_9595poweredByObjects2= [];
gdjs.MenuMapCode.GDtxt_9595poweredByObjects3= [];
gdjs.MenuMapCode.GDtxt_9595poweredByObjects4= [];
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects1= [];
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2= [];
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects3= [];
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects4= [];
gdjs.MenuMapCode.GDspr_9595backLDBObjects1= [];
gdjs.MenuMapCode.GDspr_9595backLDBObjects2= [];
gdjs.MenuMapCode.GDspr_9595backLDBObjects3= [];
gdjs.MenuMapCode.GDspr_9595backLDBObjects4= [];
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects1= [];
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2= [];
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects3= [];
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects4= [];
gdjs.MenuMapCode.GDtxt_9595lineLBObjects1= [];
gdjs.MenuMapCode.GDtxt_9595lineLBObjects2= [];
gdjs.MenuMapCode.GDtxt_9595lineLBObjects3= [];
gdjs.MenuMapCode.GDtxt_9595lineLBObjects4= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects1= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects2= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects3= [];
gdjs.MenuMapCode.GDvtn_9595reloadObjects4= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects1= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects2= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects3= [];
gdjs.MenuMapCode.GDbtn_9595SigueObjects4= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects1= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects2= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects3= [];
gdjs.MenuMapCode.GDtxt_9595fpsObjects4= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3= [];
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects4= [];


gdjs.MenuMapCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "buttons", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "LDB", 0);
}}

}


};gdjs.MenuMapCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_level"), gdjs.MenuMapCode.GDbtn_9595levelObjects2);
{for(var i = 0, len = gdjs.MenuMapCode.GDbtn_9595levelObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDbtn_9595levelObjects2[i].SetLabelText(gdjs.MenuMapCode.GDbtn_9595levelObjects2[i].getVariables().getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MenuMapCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};gdjs.MenuMapCode.asyncCallback14488812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuMapCode.localVariables);

{ //Subevents
gdjs.MenuMapCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuMapCode.localVariables.length = 0;
}
gdjs.MenuMapCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuMapCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuMapCode.asyncCallback14488812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuMapCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level0", false);
}}

}


};gdjs.MenuMapCode.asyncCallback14490348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuMapCode.localVariables);

{ //Subevents
gdjs.MenuMapCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuMapCode.localVariables.length = 0;
}
gdjs.MenuMapCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuMapCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuMapCode.asyncCallback14490348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuMapCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\Music\\Menu.aac", true, 50, 0.8);
}
{ //Subevents
gdjs.MenuMapCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_level"), gdjs.MenuMapCode.GDbtn_9595levelObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595levelObjects2.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595levelObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595levelObjects2[k] = gdjs.MenuMapCode.GDbtn_9595levelObjects2[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595levelObjects2.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595levelObjects2[i].getVariableNumber(gdjs.MenuMapCode.GDbtn_9595levelObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595levelObjects2[k] = gdjs.MenuMapCode.GDbtn_9595levelObjects2[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Music\\Click_01.aac", false, 60, 1);
}
{ //Subevents
gdjs.MenuMapCode.eventsList3(runtimeScene);} //End of subevents
}

}


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
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595levelObjects1.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595levelObjects1[i].getVariableNumber(gdjs.MenuMapCode.GDbtn_9595levelObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595levelObjects1[k] = gdjs.MenuMapCode.GDbtn_9595levelObjects1[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Music\\Click_01.aac", false, 60, 1);
}
{ //Subevents
gdjs.MenuMapCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MenuMapCode.userFunc0x42a3540 = function GDJSInlineCode(runtimeScene) {
"use strict";
/*
curl: https://api.hyplay.com/v1/apps/{appId}/leaderboards/{leaderboardId}/scores
appId: dce1f803-1a91-466a-b762-50dcff8bc764
leaderboardId: "c1742478-90c4-4bf6-ba06-32969a95055a"
tokenSecretKey: "app_sk_9n9uSZimF_gz4O0g6Zt__NV0azfiigWqyiAHyqGfw03bz7OGB5TOK1JQZIiMM8HS"
testSecretKey: "test_app_sk_mOBqNCFtCiRr3digYj72dmKAg-gXP-PoBHfcnq-9p0Tz4SI0yKTUIKenKEHodqmL"
*/

const appId = "dce1f803-1a91-466a-b762-50dcff8bc764";
const ldbId = "c1742478-90c4-4bf6-ba06-32969a95055a";
const limitScores = "5";
let arrayDataScore = [];
let urlToFetch = "https://api.hyplay.com/v1/apps/" + appId + "/leaderboards/" + ldbId + "/scores" + "?limit=" + limitScores;


//Funcion asincrona de peticion a la url
async function getLBScores() {
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: {
        "accept": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      buildLeaderBoardError();
    }
    const data = await response.json();
    //Respuesta de Hyplay
    console.log("Get leaderboard :: Get scores  :: response: ",data); 

          if (data == undefined ) {
              console.log(" Undefined data response => Error");
          } else {
            console.log("Get leaderboard :: Link response> totalScores: " + data.totalScores + " scores: " + data.scores);
            buildLeaderBoard(data.totalScores, data.scores);
            //buildLeaderBoard(6,2);
          }
  } catch (error) {
    console.error('Get leaderboard :: Error al obtener el estado de la aplicación:', error);
    buildLeaderBoardError();
  }
}

//Crea el leaderboard
function buildLeaderBoard (lines, dataScores) {
  let backg = runtimeScene.getObjects("spr_backLDB")[0];
  let offsetIni = 50;
  let offsetY = 0;
  let lbPos = 1;
  for (let i=0; i<10; i++){    
    let newLine = runtimeScene.createObject("txt_lineLB");
    lbPos = i+1
    offsetY = offsetIni + (lbPos * 50);
    newLine.setString(lbPos + ": USER---------->" + " 0");
    newLine.setY(backg.y + offsetY);
    newLine.setX(backg.x + 20);
    newLine.setLayer("LDB");
    newLine.setZOrder(100);
    arrayDataScore.push(newLine);
  }

}

//Error por cualquier cosa
function buildLeaderBoardError () {
  let backg = runtimeScene.getObjects("spr_backLDB")[0];
  let newLine = runtimeScene.createObject("txt_lineLB");
  newLine.setString("ERROR Loading LeaderBoard, try again!");
  let offsetY = 150;
  newLine.setY(backg.y + offsetY);
  newLine.setX(backg.x + 20);
  newLine.setLayer("LDB");
  newLine.setZOrder(100);
  arrayDataScore.push(newLine);
}

getLBScores();

};
gdjs.MenuMapCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_closeLDB"), gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2);
gdjs.copyArray(runtimeScene.getObjects("img_hyplayIcon"), gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2);
gdjs.copyArray(runtimeScene.getObjects("spr_backLDB"), gdjs.MenuMapCode.GDspr_9595backLDBObjects2);
{for(var i = 0, len = gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDspr_9595backLDBObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].setPosition((( gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length === 0 ) ? 0 :gdjs.MenuMapCode.GDspr_9595backLDBObjects2[0].getPointX("anchorIcon")),(( gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length === 0 ) ? 0 :gdjs.MenuMapCode.GDspr_9595backLDBObjects2[0].getPointY("anchorIcon")));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MenuMapCode.userFunc0x42a3540(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuMapCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_closeLDB"), gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2);
gdjs.copyArray(runtimeScene.getObjects("img_hyplayIcon"), gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2);
gdjs.copyArray(runtimeScene.getObjects("spr_backLDB"), gdjs.MenuMapCode.GDspr_9595backLDBObjects2);
{for(var i = 0, len = gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDspr_9595backLDBObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].returnVariable(gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].returnVariable(gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getPointY("")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_closeLDB"), gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[k] = gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2 */
gdjs.copyArray(runtimeScene.getObjects("img_hyplayIcon"), gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2);
gdjs.copyArray(runtimeScene.getObjects("spr_backLDB"), gdjs.MenuMapCode.GDspr_9595backLDBObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt_lineLB"), gdjs.MenuMapCode.GDtxt_9595lineLBObjects2);
{for(var i = 0, len = gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDspr_9595backLDBObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDtxt_9595lineLBObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDtxt_9595lineLBObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length ;i < len;++i) {
    gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].setPosition(gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getVariables().getFromIndex(0).getAsNumber(),gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2[i].getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_maxScores"), gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1.length;i<l;++i) {
    if ( gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1[k] = gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1[i];
        ++k;
    }
}
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuMapCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MenuMapCode.eventsList9 = function(runtimeScene) {

{


gdjs.MenuMapCode.eventsList0(runtimeScene);
}


{


gdjs.MenuMapCode.eventsList6(runtimeScene);
}


{


gdjs.MenuMapCode.eventsList8(runtimeScene);
}


};

gdjs.MenuMapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects4.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects4.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects1.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects3.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects4.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects4.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects4.length = 0;

gdjs.MenuMapCode.eventsList9(runtimeScene);
gdjs.MenuMapCode.GDbtn_9595levelObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595levelObjects4.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backMapObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595maxScoresObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595leaderNfoObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595poweredByObjects4.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects1.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects2.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects3.length = 0;
gdjs.MenuMapCode.GDimg_9595hyplayIconObjects4.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects1.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects2.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects3.length = 0;
gdjs.MenuMapCode.GDspr_9595backLDBObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595closeLDBObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595lineLBObjects4.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.MenuMapCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.MenuMapCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsObjects4.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects3.length = 0;
gdjs.MenuMapCode.GDtxt_9595fpsTitleObjects4.length = 0;


return;

}

gdjs['MenuMapCode'] = gdjs.MenuMapCode;
