var gdjs;(function(r){const n=["text","email","password","number","telephone number","url","search","text area"],o=i=>{const t=i.toLowerCase();return n.includes(t)?i:"text"},s=300,l=30;class d extends r.RuntimeObject{constructor(t,e){super(t,e);this.opacity=255;this._width=s;this._height=l;this._string=e.content.initialValue,this._placeholder=e.content.placeholder,this._fontResourceName=e.content.fontResourceName,this._fontSize=e.content.fontSize||20,this._inputType=o(e.content.inputType),this._textColor=r.rgbOrHexToRGBColor(e.content.textColor),this._fillColor=r.rgbOrHexToRGBColor(e.content.fillColor),this._fillOpacity=e.content.fillOpacity,this._borderColor=r.rgbOrHexToRGBColor(e.content.borderColor),this._borderOpacity=e.content.borderOpacity,this._borderWidth=e.content.borderWidth,this._disabled=e.content.disabled,this._readOnly=e.content.readOnly,this._renderer=new r.TextInputRuntimeObjectRenderer(this,t),this.onCreated()}getRendererObject(){return null}updateFromObjectData(t,e){return t.content.initialValue!==e.content.initialValue&&this._string===t.content.initialValue&&this.setString(e.content.initialValue),t.content.placeholder!==e.content.placeholder&&this.setPlaceholder(e.content.placeholder),t.content.fontResourceName!==e.content.fontResourceName&&this.setFontResourceName(e.content.fontResourceName),t.content.fontSize!==e.content.fontSize&&this.setFontSize(e.content.fontSize),t.content.inputType!==e.content.inputType&&this.setInputType(e.content.inputType),t.content.textColor!==e.content.textColor&&this.setTextColor(e.content.textColor),t.content.fillColor!==e.content.fillColor&&this.setFillColor(e.content.fillColor),t.content.fillOpacity!==e.content.fillOpacity&&this.setFillOpacity(e.content.fillOpacity),t.content.borderColor!==e.content.borderColor&&this.setBorderColor(e.content.borderColor),t.content.borderOpacity!==e.content.borderOpacity&&this.setBorderOpacity(e.content.borderOpacity),t.content.borderWidth!==e.content.borderWidth&&this.setBorderWidth(e.content.borderWidth),t.content.disabled!==e.content.disabled&&this.setDisabled(e.content.disabled),t.content.readOnly!==e.content.readOnly&&this.setReadOnly(e.content.readOnly),!0}getNetworkSyncData(){return{...super.getNetworkSyncData(),opa:this.getOpacity(),wid:this.getWidth(),hei:this.getHeight(),txt:this.getText(),frn:this.getFontResourceName(),fs:this.getFontSize(),place:this.getPlaceholder(),it:this.getInputType(),tc:this.getTextColor(),fc:this.getFillColor(),fo:this.getFillOpacity(),bc:this.getBorderColor(),bo:this.getBorderOpacity(),bw:this.getBorderWidth(),dis:this.isDisabled(),ro:this.isReadOnly()}}updateFromNetworkSyncData(t){super.updateFromNetworkSyncData(t),t.opa!==void 0&&this.setOpacity(t.opa),t.wid!==void 0&&this.setWidth(t.wid),t.hei!==void 0&&this.setHeight(t.hei),t.txt!==void 0&&this.setText(t.txt),t.frn!==void 0&&this.setFontResourceName(t.frn),t.fs!==void 0&&this.setFontSize(t.fs),t.place!==void 0&&this.setPlaceholder(t.place),t.it!==void 0&&this.setInputType(t.it),t.tc!==void 0&&this.setTextColor(t.tc),t.fc!==void 0&&this.setFillColor(t.fc),t.fo!==void 0&&this.setFillOpacity(t.fo),t.bc!==void 0&&this.setBorderColor(t.bc),t.bo!==void 0&&this.setBorderOpacity(t.bo),t.bw!==void 0&&this.setBorderWidth(t.bw),t.dis!==void 0&&this.setDisabled(t.dis),t.ro!==void 0&&this.setReadOnly(t.ro)}updatePreRender(t){this._renderer.updatePreRender()}extraInitializationFromInitialInstance(t){for(const e of t.stringProperties)e.name==="initialValue"?this.setString(e.value):e.name==="placeholder"&&this.setPlaceholder(e.value);t.customSize&&(this.setWidth(t.width),this.setHeight(t.height)),t.opacity!==void 0&&this.setOpacity(t.opacity)}onScenePaused(t){this._renderer.onScenePaused()}onSceneResumed(t){this._renderer.onSceneResumed()}onDestroyed(){super.onDestroyed(),this._renderer.onDestroy()}setOpacity(t){this.opacity=Math.max(0,Math.min(255,t)),this._renderer.updateOpacity()}getOpacity(){return this.opacity}setSize(t,e){this.setWidth(t),this.setHeight(e)}setWidth(t){this._width=t}setHeight(t){this._height=t}getWidth(){return this._width}getHeight(){return this._height}getString(){return this.getText()}setString(t){this.setText(t)}getText(){return this._string}setText(t){t!==this._string&&(this._string=t,this._renderer.updateString())}onRendererInputValueChanged(t){this._string=t}getFontResourceName(){return this._fontResourceName}setFontResourceName(t){this._fontResourceName!==t&&(this._fontResourceName=t,this._renderer.updateFont())}getFontSize(){return this._fontSize}setFontSize(t){this._fontSize=t}getPlaceholder(){return this._placeholder}setPlaceholder(t){t!==this._placeholder&&(this._placeholder=t,this._renderer.updatePlaceholder())}getInputType(){return this._inputType}setInputType(t){const e=t.toLowerCase();e!==this._inputType&&(this._inputType=o(e),this._renderer.updateInputType())}setTextColor(t){this._textColor=r.rgbOrHexToRGBColor(t),this._renderer.updateTextColor()}getTextColor(){return this._textColor[0]+";"+this._textColor[1]+";"+this._textColor[2]}_getRawTextColor(){return this._textColor}setFillColor(t){this._fillColor=r.rgbOrHexToRGBColor(t),this._renderer.updateFillColorAndOpacity()}getFillColor(){return this._fillColor[0]+";"+this._fillColor[1]+";"+this._fillColor[2]}_getRawFillColor(){return this._fillColor}setFillOpacity(t){this._fillOpacity=Math.max(0,Math.min(255,t)),this._renderer.updateFillColorAndOpacity()}getFillOpacity(){return this._fillOpacity}setBorderColor(t){this._borderColor=r.rgbOrHexToRGBColor(t),this._renderer.updateBorderColorAndOpacity()}getBorderColor(){return this._borderColor[0]+";"+this._borderColor[1]+";"+this._borderColor[2]}_getRawBorderColor(){return this._borderColor}setBorderOpacity(t){this._borderOpacity=Math.max(0,Math.min(255,t)),this._renderer.updateBorderColorAndOpacity()}getBorderOpacity(){return this._borderOpacity}setBorderWidth(t){this._borderWidth=Math.max(0,t),this._renderer.updateBorderWidth()}getBorderWidth(){return this._borderWidth}setDisabled(t){this._disabled=t,this._renderer.updateDisabled()}isDisabled(){return this._disabled}setReadOnly(t){this._readOnly=t,this._renderer.updateReadOnly()}isReadOnly(){return this._readOnly}isFocused(){return this._renderer.isFocused()}focus(){this._renderer.focus()}}r.TextInputRuntimeObject=d,r.registerObject("TextInput::TextInputObject",r.TextInputRuntimeObject)})(gdjs||(gdjs={}));
//# sourceMappingURL=textinputruntimeobject.js.map
