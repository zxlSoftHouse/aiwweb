webpackJsonp([38],{NP7I:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("vLgD"),r=(o("mw3O"),function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/addjob/",method:"post",params:t})}),n=function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/deletejob",method:"post",params:t})},l=function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/pausejob",method:"post",params:t})},i=function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/queryjob",method:"get",params:t})},s=function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/reschedulejob",method:"post",params:t})},u=function(t){return Object(a.a)({url:"/api/SERVICE-SCHEDULER/job/resumejob",method:"post",params:t})},c={data:function(){return{tableData:[],pagesize:10,currentPage:1,start:1,totalCount:1e3,dialogFormVisible:!1,updateFormVisible:!1,form:{jobName:"",jobGroup:"",cronExpression:""},updateform:{jobName:"",jobGroup:"",cronExpression:""}}},mounted:function(){this.loadData(this.currentPage,this.pagesize)},methods:{loadData:function(t,e){var o=this;i({pageNum:t,pageSize:e}).then(function(t){o.tableData=t.JobAndTrigger.list,o.totalCount=1*t.JobAndTrigger.total},function(){})},handleDelete:function(t,e){var o=this;n({jobClassName:e.job_NAME,jobGroupName:e.job_GROUP}).then(function(t){o.loadData(o.currentPage,o.pagesize)},function(){})},handlePause:function(t,e){var o=this;l({jobClassName:e.job_NAME,jobGroupName:e.job_GROUP}).then(function(t){o.loadData(o.currentPage,o.pagesize)},function(){})},handleResume:function(t,e){var o=this;u({jobClassName:e.job_NAME,jobGroupName:e.job_GROUP}).then(function(t){o.loadData(o.currentPage,o.pagesize)},function(){})},search:function(){this.loadData(this.currentPage,this.pagesize)},handleadd:function(){this.dialogFormVisible=!0},add:function(){var t=this;r({jobClassName:this.form.jobName,jobGroupName:this.form.jobGroup,cronExpression:this.form.cronExpression}).then(function(e){t.loadData(t.currentPage,t.pagesize),t.dialogFormVisible=!1},function(){})},handleUpdate:function(t,e){this.updateFormVisible=!0,this.updateform.jobName=e.job_CLASS_NAME,this.updateform.jobGroup=e.job_GROUP},update:function(){var t=this;s({jobClassName:this.updateform.jobName,jobGroupName:this.updateform.jobGroup,cronExpression:this.updateform.cronExpression}).then(function(e){t.loadData(t.currentPage,t.pagesize),t.updateFormVisible=!1},function(){})},handleSizeChange:function(t){this.pagesize=t,this.loadData(this.currentPage,this.pagesize)},handleCurrentChange:function(t){this.currentPage=t,this.loadData(this.currentPage,this.pagesize)}}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"test"}},[o("div",{attrs:{id:"top"}},[o("el-button",{staticStyle:{color:"white"},attrs:{type:"text"},on:{click:t.search}},[t._v("查询")]),t._v(" "),o("el-button",{staticStyle:{color:"white"},attrs:{type:"text"},on:{click:t.handleadd}},[t._v("添加")])],1),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{"margin-top":"15px"}},[o("el-table",{ref:"testTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{prop:"job_NAME",label:"任务名称",sortable:"","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"job_GROUP",label:"任务所在组",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"job_CLASS_NAME",label:"任务类名",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"trigger_NAME",label:"触发器名称",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"trigger_GROUP",label:"触发器所在组",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"cron_EXPRESSION",label:"表达式",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"time_ZONE_ID",label:"时区",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"trigger_STATE",label:"状态",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return["PAUSED"!==e.row.trigger_STATE?o("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(o){return t.handlePause(e.$index,e.row)}}},[t._v("暂停")]):o("el-button",{attrs:{size:"small",type:"info"},on:{click:function(o){return t.handleResume(e.$index,e.row)}}},[t._v("恢复")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"success"},on:{click:function(o){return t.handleUpdate(e.$index,e.row)}}},[t._v("修改")])]}}])})],1),t._v(" "),o("div",{attrs:{align:"center"}},[o("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"添加任务","append-to-body":!0,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",{staticStyle:{width:"35%"},attrs:{label:"任务名称","label-width":"120px"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.jobName,callback:function(e){t.$set(t.form,"jobName",e)},expression:"form.jobName"}})],1),t._v(" "),o("el-form-item",{staticStyle:{width:"35%"},attrs:{label:"任务分组","label-width":"120px"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.jobGroup,callback:function(e){t.$set(t.form,"jobGroup",e)},expression:"form.jobGroup"}})],1),t._v(" "),o("el-form-item",{staticStyle:{width:"35%"},attrs:{label:"表达式","label-width":"120px"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.cronExpression,callback:function(e){t.$set(t.form,"cronExpression",e)},expression:"form.cronExpression"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("确 定")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"修改任务","append-to-body":!0,visible:t.updateFormVisible},on:{"update:visible":function(e){t.updateFormVisible=e}}},[o("el-form",{attrs:{model:t.updateform}},[o("el-form-item",{staticStyle:{width:"35%"},attrs:{label:"表达式","label-width":"120px"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateform.cronExpression,callback:function(e){t.$set(t.updateform,"cronExpression",e)},expression:"updateform.cronExpression"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.updateFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var b=o("VU/8")(c,p,!1,function(t){o("fnNL")},null,null);e.default=b.exports},fnNL:function(t,e,o){var a=o("j8E1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("7ed3af1c",a,!0)},j8E1:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n#top {\n  background: #20A0FF;\n  padding: 5px;\n  overflow: hidden;\n}\n",""])}});