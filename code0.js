gdjs.LoginHyplayCode = {};
gdjs.LoginHyplayCode.localVariables = [];
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects1= [];
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects2= [];
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3= [];
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects4= [];
gdjs.LoginHyplayCode.GDloginObjects1= [];
gdjs.LoginHyplayCode.GDloginObjects2= [];
gdjs.LoginHyplayCode.GDloginObjects3= [];
gdjs.LoginHyplayCode.GDloginObjects4= [];
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects1= [];
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2= [];
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects3= [];
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects4= [];
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects1= [];
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2= [];
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects3= [];
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects4= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects1= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects2= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects3= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects4= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects1= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects2= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects3= [];
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects4= [];


gdjs.LoginHyplayCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("vtn_reload"), gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2.length;i<l;++i) {
    if ( gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2[k] = gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2[i];
        ++k;
    }
}
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoginHyplay", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_Sigue"), gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2.length;i<l;++i) {
    if ( gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2[k] = gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2[i];
        ++k;
    }
}
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MenuMap");
}}

}


{



}


{



}


};gdjs.LoginHyplayCode.userFunc0xc20da0 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
    var appId = "ae6b8795-169f-40c9-bf60-a3736dceeffc"; //id del juego de naves
    //var appId = "b15e49b1-db6d-43cc-8f7c-ee157a517da2"; //juego de oneshoot
    var redirectUri = encodeURIComponent("https://covra.github.io/testHYPLAY/redirect.html"); // Add an empty html file at this URL, and add it to your hyplay app
    var url = "https://hyplay.com/oauth/authorize/?appId=" + appId + "&chain=HYCHAIN&responseType=token&redirectUri=" + redirectUri;    
    var interval = null;

    // Open a new popup window
    const popup = window.open(url, "PopupWindow", "width=600,height=600");
    //const popup = window.open(url, "PopupWindow", "width=600,height=600");

    // Function to check URL changes
    var checkUrlChange = function() {
        try {
            objects[0].setString("Checking auth.... \n WAIT to auto-close popUp window.... \n Not gmail accounts could be problematic");
            // Check if popup was closed
            if (popup.closed) {
                console.log("Popup has been closed.");
                clearInterval(interval);
            } else {

                // Do something if URL meets certain criteria
                var hash = popup.location.hash.substring(1);
                var params = new URLSearchParams(hash);
                var accessToken = params.get('token');

                if (accessToken) {                    
                    // However gdevelop wants you to send a message bacn to your game
                    popup.close();
                    clearInterval(interval);
                    // Checking 
                    objects[0].setString("Succsesfull login: " + accessToken.substring(-1, 10) + "XXXXXX");
                    //runtimeScene.setBackgroundColor(0,204,100);
                    //runtimeScene.getGame().getVariables().get("sessionAccessToken").setString(accessToken); //now the variable token is in the scene
                    runtimeScene.getVariables().get("sessionAccessToken").setString(accessToken);
                    console.log('Login :: getUser >> Access token:', accessToken);
                }
            }
        } catch (e) {
            // Errors are thrown if the popup navigates to a different origin
            console.error("Error accessing popup URL: ", e);
        }
    };

    // Set interval to check URL every 500 milliseconds
    interval = setInterval(checkUrlChange, 500);


};
gdjs.LoginHyplayCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("txt_debug1"), gdjs.LoginHyplayCode.GDtxt_9595debug1Objects2);

var objects = [];
objects.push.apply(objects,gdjs.LoginHyplayCode.GDtxt_9595debug1Objects2);
gdjs.LoginHyplayCode.userFunc0xc20da0(runtimeScene, objects);

}


};gdjs.LoginHyplayCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.LoginHyplayCode.GDloginObjects2, gdjs.LoginHyplayCode.GDloginObjects3);

{for(var i = 0, len = gdjs.LoginHyplayCode.GDloginObjects3.length ;i < len;++i) {
    gdjs.LoginHyplayCode.GDloginObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.LoginHyplayCode.eventsList1(runtimeScene);
}


};gdjs.LoginHyplayCode.asyncCallback19397220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
gdjs.LoginHyplayCode.localVariables.length = 0;
}
gdjs.LoginHyplayCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "HYPLAYGetUser", runtimeScene.getScene().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.LoginHyplayCode.asyncCallback19397220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginHyplayCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.log("Getting user....", "info", "");
}{gdjs.evtTools.debuggerTools.log("with access token: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "info", "login");
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "HYPLAYGetUser", "https://api.hyplay.com/v1/users/me", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "HYPLAYGetUser", "x-session-authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "HYPLAYGetUser", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginHyplayCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))).includes("sca_sat");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{ //Subevents
gdjs.LoginHyplayCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.userFunc0x11ac230 = function GDJSInlineCode(runtimeScene) {
"use strict";
setTimeout(()=>{
    //Get info variables from response
    let responseObject = runtimeScene.getVariables().get("responseGetUser");
    let id = responseObject.getChildNamed("id").getAsString();
    let username = responseObject.getChildNamed("username").getAsString();

    //Log response
    console.group("userData from response");
        console.log("id: ", id);
        console.log("username: ", username);
    console.groupEnd();

    //Pass variables data
    let globalUserStruct = runtimeScene.getGame().getVariables().get("currentUser");
    globalUserStruct.getChildNamed("id").setString(id);
    globalUserStruct.getChildNamed("username").setString(username);

    //Get info variables from response
    let idGlobal = globalUserStruct.getChildNamed("id").getAsString();
    let usernameGlobal = globalUserStruct.getChildNamed("username").getAsString();

    //Log Global
    console.group("userData from Global");
        console.log("id: ", idGlobal);
        console.log("username: ", usernameGlobal);
    console.groupEnd();

    //Token
    let tokenAuth = runtimeScene.getGame().getVariables().get("sessionAccessToken").getAsString();
    let tokenAuthScn = runtimeScene.getVariables().get("sessionAccessToken").getAsString();
    console.log("Token Scene: ", tokenAuthScn);
    console.log("Token Global: ", "xxxxxxxxxxxxxxxxx");
},250);
};
gdjs.LoginHyplayCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug1"), gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3);
{for(var i = 0, len = gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3.length ;i < len;++i) {
    gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3[i].getBehavior("Text").setText("Welcome " + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("username").getAsString() + "!");
}
}{gdjs.evtTools.debuggerTools.log("username: " + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("username").getAsString(), "info", "");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(true);
}}

}


{



}


{


gdjs.LoginHyplayCode.userFunc0x11ac230(runtimeScene);

}


};gdjs.LoginHyplayCode.asyncCallback19398124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
{gdjs.evtTools.debuggerTools.log("Response from hyplay: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), "info", "");
}
{ //Subevents
gdjs.LoginHyplayCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoginHyplayCode.localVariables.length = 0;
}
gdjs.LoginHyplayCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.LoginHyplayCode.asyncCallback19398124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginHyplayCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("login"), gdjs.LoginHyplayCode.GDloginObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginHyplayCode.GDloginObjects2.length;i<l;++i) {
    if ( gdjs.LoginHyplayCode.GDloginObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginHyplayCode.GDloginObjects2[k] = gdjs.LoginHyplayCode.GDloginObjects2[i];
        ++k;
    }
}
gdjs.LoginHyplayCode.GDloginObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19388724);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.LoginHyplayCode.eventsList5(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19397604);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.userFunc0x11ac8f8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const tbd = objects[0];
const tokenAuth = runtimeScene.getGame().getVariables().get("sessionAccessToken").getAsString();
const globalUserStruct = runtimeScene.getGame().getVariables().get("currentUser");
const usernameGlobal = globalUserStruct.getChildNamed("username").getAsString();
let url = "https://api.hyplay.com/v1/apps/ae6b8795-169f-40c9-bf60-a3736dceeffc/states?key=";
url = "https://api.hyplay.com/v1/apps/ae6b8795-169f-40c9-bf60-a3736dceeffc/states";
let urlUser = url + usernameGlobal; 

async function getAppState() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-app-authorization": "test_app_sk_qFU3lFRW9-vh8fbGsfsP13_Gu8YVKSLVlFwtFPS2-fgFNesOY155Sfgdp8tOZo4Q",
        "x-session-authorization": tokenAuth,
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    //Respuesta de Hyplay
    console.log("GetAppState :: response: ",data); // Aquí puedes manejar la respuesta como necesites

          if (data.privateState.resetAccount == undefined ) {
             //VA AL SET POST
              runtimeScene.getVariables().get("bIsGetAppState").setBoolean(true);
              runtimeScene.getVariables().get("bIsSetAppState").setBoolean(false);
              console.log("GetAppState :: cuenta NO reseteada, va a POST...")
          } else {
              //CARGA DATOS
              runtimeScene.getVariables().get("bIsGetAppState").setBoolean(true);
              runtimeScene.getVariables().get("bIsSetAppState").setBoolean(true);
              console.log("GetAppState :: cuenta OK, carga datos")
              //STR TO NUM
              let credits = parseInt(data.protectedState.player_param_credits);
              let repu = parseInt(data.protectedState.player_param_reputation);
              let level = parseInt(data.protectedState.player_param_contractLvl);
              let totalScrap = parseInt(data.protectedState.player_param_totalScrap);
              //SETTINGS
              let bGameModeStr = data.publicState.player_param_lastModePlayedPC
              let bGameMode = false;
              if (bGameModeStr == "true"){bGameMode = true};
              let bMusicModeStr = data.publicState.player_param_lastMusic
              let bMusicMode = false;
              if (bMusicModeStr == "true"){bMusicMode = true};
              //TO GAME
              runtimeScene.getGame().getVariables().get("player_param_credits").setNumber(credits)
              runtimeScene.getGame().getVariables().get("player_param_reputation").setNumber(repu)
              runtimeScene.getGame().getVariables().get("player_param_contractLvl").setNumber(level)
              runtimeScene.getGame().getVariables().get("player_param_totalScrap").setNumber(totalScrap)
              runtimeScene.getGame().getVariables().get("player_param_lastModePlayedPC").setBoolean(bGameMode)
              runtimeScene.getGame().getVariables().get("player_param_lastMusic").setBoolean(bMusicMode)
          }

  } catch (error) {
    console.error('GetAppState :: Error al obtener el estado de la aplicación:', error);
  }
}

// Llama a la función para ejecutar la petición
getAppState();

};
gdjs.LoginHyplayCode.eventsList9 = function(runtimeScene) {

{


var objects = [];
gdjs.LoginHyplayCode.userFunc0x11ac8f8(runtimeScene, objects);

}


};gdjs.LoginHyplayCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, false, false);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19402804);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{



}


};gdjs.LoginHyplayCode.userFunc0xc207f8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const tbd = objects[0];
const tokenAuth = runtimeScene.getGame().getVariables().get("sessionAccessToken").getAsString();
const globalUserStruct = runtimeScene.getGame().getVariables().get("currentUser");
const usernameGlobal = globalUserStruct.getChildNamed("username").getAsString();
let urlSetAppState = "https://api.hyplay.com/v1/apps/ae6b8795-169f-40c9-bf60-a3736dceeffc/states";

async function setAppState(newState) {
  try {
    const response = await fetch(urlSetAppState, {
      method: 'POST',
      headers: {
        "accept": "application/json",
        "content-Type": "application/json",
        "x-app-authorization": "test_app_sk_qFU3lFRW9-vh8fbGsfsP13_Gu8YVKSLVlFwtFPS2-fgFNesOY155Sfgdp8tOZo4Q",
        "x-session-authorization": tokenAuth,
      },
      body: JSON.stringify(newState)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("SetAppState :: response: ",data); // Aquí puedes manejar la respuesta como necesites
    runtimeScene.getVariables().get("bIsGetAppState").setBoolean(true);
                  runtimeScene.getVariables().get("bIsSetAppState").setBoolean(true);
  } catch (error) {
    console.error('SetAppState :: response: Error al establecer el estado de la aplicación:', error);
  }
}

// Datos base si es nuevo
const bodyToWriteOrig = {

  "publicState": {
    "publicData": "none",
    "player_param_lastModePlayedPC": "true",
    "player_param_lastMusic": "false"
  },
  "protectedState": {
    "player_param_credits": "0",
    "player_param_reputation": "0",
    "player_param_contractLvl": "0",
    "player_param_totalScrap": "0"
  },
  "privateState": {
    "resetAccount": "false"
  },
  "overwrite": true
};

// Llama a la función para ejecutar la petición
setAppState(bodyToWriteOrig);

};
gdjs.LoginHyplayCode.eventsList11 = function(runtimeScene) {

{


var objects = [];
gdjs.LoginHyplayCode.userFunc0xc207f8(runtimeScene, objects);

}


};gdjs.LoginHyplayCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, false, false);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19406548);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{



}


};gdjs.LoginHyplayCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


{


gdjs.LoginHyplayCode.eventsList10(runtimeScene);
}


{


gdjs.LoginHyplayCode.eventsList12(runtimeScene);
}


{



}


{



}


{



}


{



}


{



}


};gdjs.LoginHyplayCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", false);
}}

}


};gdjs.LoginHyplayCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", false);
}}

}


};gdjs.LoginHyplayCode.asyncCallback19444932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.LoginHyplayCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoginHyplayCode.localVariables.length = 0;
}
gdjs.LoginHyplayCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.LoginHyplayCode.asyncCallback19444932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginHyplayCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LoginHyplayCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", false);
}}

}


};gdjs.LoginHyplayCode.asyncCallback19448868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.LoginHyplayCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoginHyplayCode.localVariables.length = 0;
}
gdjs.LoginHyplayCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginHyplayCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoginHyplayCode.asyncCallback19448868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginHyplayCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LoginHyplayCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, true, false);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19445060);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(gdjs.VariablesContainer.badVariable, true, false);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19447972);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginHyplayCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.LoginHyplayCode.eventsList22 = function(runtimeScene) {

{


gdjs.LoginHyplayCode.eventsList14(runtimeScene);
}


{


gdjs.LoginHyplayCode.eventsList21(runtimeScene);
}


};gdjs.LoginHyplayCode.eventsList23 = function(runtimeScene) {

{


gdjs.LoginHyplayCode.eventsList0(runtimeScene);
}


{


gdjs.LoginHyplayCode.eventsList8(runtimeScene);
}


{


gdjs.LoginHyplayCode.eventsList13(runtimeScene);
}


{


gdjs.LoginHyplayCode.eventsList22(runtimeScene);
}


};

gdjs.LoginHyplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginHyplayCode.GDtxt_9595debug1Objects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects4.length = 0;
gdjs.LoginHyplayCode.GDloginObjects1.length = 0;
gdjs.LoginHyplayCode.GDloginObjects2.length = 0;
gdjs.LoginHyplayCode.GDloginObjects3.length = 0;
gdjs.LoginHyplayCode.GDloginObjects4.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects4.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects4.length = 0;

gdjs.LoginHyplayCode.eventsList23(runtimeScene);
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595debug1Objects4.length = 0;
gdjs.LoginHyplayCode.GDloginObjects1.length = 0;
gdjs.LoginHyplayCode.GDloginObjects2.length = 0;
gdjs.LoginHyplayCode.GDloginObjects3.length = 0;
gdjs.LoginHyplayCode.GDloginObjects4.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.LoginHyplayCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.LoginHyplayCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsObjects4.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects1.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects2.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects3.length = 0;
gdjs.LoginHyplayCode.GDtxt_9595fpsTitleObjects4.length = 0;


return;

}

gdjs['LoginHyplayCode'] = gdjs.LoginHyplayCode;
