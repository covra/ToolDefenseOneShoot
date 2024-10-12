
gdjs.evtsExt__toolClass__damageTool = gdjs.evtsExt__toolClass__damageTool || {};

/**
 * Behavior generated from BH_damageTool
 */
gdjs.evtsExt__toolClass__damageTool.damageTool = class damageTool extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__toolClass__damageTool.damageTool.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.bisEnableDmg = behaviorData.bisEnableDmg !== undefined ? behaviorData.bisEnableDmg : false;
    this._behaviorData.dmgQty = behaviorData.dmgQty !== undefined ? behaviorData.dmgQty : Number("1") || 0;
    this._behaviorData.timerTime = behaviorData.timerTime !== undefined ? behaviorData.timerTime : Number("5") || 0;
    this._behaviorData.timerName = behaviorData.timerName !== undefined ? behaviorData.timerName : "nametimer";
    this._behaviorData.bIsTimerOverflow = behaviorData.bIsTimerOverflow !== undefined ? behaviorData.bIsTimerOverflow : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.bisEnableDmg !== newBehaviorData.bisEnableDmg)
      this._behaviorData.bisEnableDmg = newBehaviorData.bisEnableDmg;
    if (oldBehaviorData.dmgQty !== newBehaviorData.dmgQty)
      this._behaviorData.dmgQty = newBehaviorData.dmgQty;
    if (oldBehaviorData.timerTime !== newBehaviorData.timerTime)
      this._behaviorData.timerTime = newBehaviorData.timerTime;
    if (oldBehaviorData.timerName !== newBehaviorData.timerName)
      this._behaviorData.timerName = newBehaviorData.timerName;
    if (oldBehaviorData.bIsTimerOverflow !== newBehaviorData.bIsTimerOverflow)
      this._behaviorData.bIsTimerOverflow = newBehaviorData.bIsTimerOverflow;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    bisEnableDmg: this._behaviorData.bisEnableDmg,
    dmgQty: this._behaviorData.dmgQty,
    timerTime: this._behaviorData.timerTime,
    timerName: this._behaviorData.timerName,
    bIsTimerOverflow: this._behaviorData.bIsTimerOverflow,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.bisEnableDmg !== undefined)
      this._behaviorData.bisEnableDmg = networkSyncData.props.bisEnableDmg;
    if (networkSyncData.props.dmgQty !== undefined)
      this._behaviorData.dmgQty = networkSyncData.props.dmgQty;
    if (networkSyncData.props.timerTime !== undefined)
      this._behaviorData.timerTime = networkSyncData.props.timerTime;
    if (networkSyncData.props.timerName !== undefined)
      this._behaviorData.timerName = networkSyncData.props.timerName;
    if (networkSyncData.props.bIsTimerOverflow !== undefined)
      this._behaviorData.bIsTimerOverflow = networkSyncData.props.bIsTimerOverflow;
  }

  // Properties:
  
  _getbisEnableDmg() {
    return this._behaviorData.bisEnableDmg !== undefined ? this._behaviorData.bisEnableDmg : false;
  }
  _setbisEnableDmg(newValue) {
    this._behaviorData.bisEnableDmg = newValue;
  }
  _togglebisEnableDmg() {
    this._setbisEnableDmg(!this._getbisEnableDmg());
  }
  _getdmgQty() {
    return this._behaviorData.dmgQty !== undefined ? this._behaviorData.dmgQty : Number("1") || 0;
  }
  _setdmgQty(newValue) {
    this._behaviorData.dmgQty = newValue;
  }
  _gettimerTime() {
    return this._behaviorData.timerTime !== undefined ? this._behaviorData.timerTime : Number("5") || 0;
  }
  _settimerTime(newValue) {
    this._behaviorData.timerTime = newValue;
  }
  _gettimerName() {
    return this._behaviorData.timerName !== undefined ? this._behaviorData.timerName : "nametimer";
  }
  _settimerName(newValue) {
    this._behaviorData.timerName = newValue;
  }
  _getbIsTimerOverflow() {
    return this._behaviorData.bIsTimerOverflow !== undefined ? this._behaviorData.bIsTimerOverflow : false;
  }
  _setbIsTimerOverflow(newValue) {
    this._behaviorData.bIsTimerOverflow = newValue;
  }
  _togglebIsTimerOverflow() {
    this._setbIsTimerOverflow(!this._getbIsTimerOverflow());
  }
}

/**
 * Shared data generated from BH_damageTool
 */
gdjs.evtsExt__toolClass__damageTool.damageTool.SharedData = class damageToolSharedData {
  constructor(sharedData) {
    
    this.sceneDamageToolProperty = sharedData.sceneDamageToolProperty !== undefined ? sharedData.sceneDamageToolProperty : Number("1") || 0;
  }
  
  // Shared properties:
  
  _getsceneDamageToolProperty() {
    return this.sceneDamageToolProperty !== undefined ? this.sceneDamageToolProperty : Number("1") || 0;
  }
  _setsceneDamageToolProperty(newValue) {
    this.sceneDamageToolProperty = newValue;
  }
}

gdjs.evtsExt__toolClass__damageTool.damageTool.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._toolClass_damageToolSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._toolClass_damageToolSharedData = new gdjs.evtsExt__toolClass__damageTool.damageTool.SharedData(
      initialData
    );
  }
  return instanceContainer._toolClass_damageToolSharedData;
}

// Methods:
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext = {};
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerName());
}
}}

}


};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("toolClass"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("toolClass"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext = {};
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects2= [];


gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1[i].resetTimer(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerName());
}
}}

}


};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimer = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("toolClass"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("toolClass"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.resetTimerContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext = {};
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects2= [];


gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN(("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerTime())) >= (gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerTime()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[k] = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN(("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerTime())) >= (gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerTime())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[k] = gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds(("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettimerTime()))); }}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimer = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("toolClass"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("toolClass"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.overflowTimerContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__toolClass__damageTool.damageTool.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("toolClass::damageTool", gdjs.evtsExt__toolClass__damageTool.damageTool);
