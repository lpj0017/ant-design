webpackJsonp([175,200],{1433:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var a=n(1),d=(o(a),n(2));o(d);t.exports={content:["section",["p","Cascade selection box."],["h2","When To Use"],["ul",["li",["p","When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."]],["li",["p","When selecting from a large data set, with multi-stage classification separated for easy selection."]],["li",["p","chooses cascade items in one float layer for better user experience."]]]],meta:{category:"Components",type:"Data Entry",title:"Cascader",filename:"components/cascader/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Cascader</span> <span class="token attr-name" >options</span><span class="token attr-value" ><span class="token punctuation" >=</span>{options}</span> <span class="token attr-name" >onChange</span><span class="token attr-value" ><span class="token punctuation" >=</span>{onChange}</span> <span class="token punctuation" >/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","options"],["td","data options of cascade"],["td","object"],["td","-"]],["tr",["td","defaultValue"],["td","initial selected value"],["td","array"],["td","[]"]],["tr",["td","value"],["td","selected value"],["td","array"],["td","-"]],["tr",["td","onChange"],["td","callback when finishing cascader select"],["td",["code","function(value, selectedOptions)"]],["td","-"]],["tr",["td","displayRender"],["td","render function of displaying selected options"],["td",["code","function(label, selectedOptions)"]],["td",["code","label => label.join(' / ')"]]],["tr",["td","style"],["td","additional style"],["td","string"],["td","-"]],["tr",["td","className"],["td","additional css class"],["td","string"],["td","-"]],["tr",["td","popupClassName"],["td","additional className of popup overlay"],["td","string"],["td","-"]],["tr",["td","popupPlacement"],["td","use preset popup align config from builtinPlacements\uff1a",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]]],["tr",["td","placeholder"],["td","input placeholder"],["td","string"],["td","'Please select'"]],["tr",["td","size"],["td","input size, one of ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","disabled"],["td","whether disabled select"],["td","boolean"],["td","false"]],["tr",["td","allowClear"],["td","whether allow clear"],["td","boolean"],["td","true"]],["tr",["td","expandTrigger"],["td","expand current item when click or hover, one of 'click' 'hover'"],["td","string"],["td","'click'"]],["tr",["td","changeOnSelect"],["td","change value on each selection if set to true, see above demo for details"],["td","boolean"],["td","false"]],["tr",["td","showSearch"],["td","Whether show search input in single mode."],["td","Boolean or Object"],["td","false"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches."],["td","String"],["td","'Not Found'"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative.",["a",{title:null,href:"http://codepen.io/anon/pen/xVBOVQ?editors=001"},"example"]],["td","Function(triggerNode)"],["td","() => document.body"]]]],["p","Fields in ",["code","showSearch"],":"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","filter"],["td","The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded."],["td",["code","function(inputValue, path): boolean"]],["td"]],["tr",["td","render"],["td","Used to render filtered options."],["td",["code","function(inputValue, path): React.ReactNode"]],["td"]],["tr",["td","sort"],["td","Used to sort filtered options."],["td",["code","function(a, b, inputValue)"]],["td"]],["tr",["td","matchInputWidth"],["td","Whether the width of result list equals to input's"],["td","boolean"],["td"]]]],["style","\n.ant-cascader-picker {\n  width: 220px;\n}\n"]]}}});