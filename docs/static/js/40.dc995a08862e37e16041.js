webpackJsonp([40],{N2u8:function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n",""])},fdD0:function(e,t,o){var a=o("N2u8");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("2b483be7",a,!0)},uk8X:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("woOf"),i=o.n(a),s=o("lbHh"),r=o.n(s),l=o("pDcy"),n=o("0xDb"),c=o("kTXO"),u={data:function(){return{nowDate:"",businessId:"",imageUrl:"",orgName:"",org:{rowId:"",orgCode:"",orgName:"",respUserId:"",orgType:"",businessId:""},multipleSelection:[],multipleSelectionAllIds:[],searchInput:"",tipDialog:!1,tipDialogTxt:"",dialogTitle:"新增",tableList:[],recordCount:0,pageSize:10,pageAt:1,showDialog:!1,showSetDialog:!1,formLabelWidth:"80px",rules:{orgName:[{required:!0,message:"请输入公司名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],respUserId:[{required:!0,message:"请输入责任人",trigger:"blur"},{min:1,max:8,message:"长度在 1 到 8 个字符",trigger:"blur"}]},filterMethod:function(e,t){return t.roleName.indexOf(e)>-1}}},filters:{formatDate:function(e){var t=new Date(e);return Object(n.parseTime)(t,"{y}-{m}-{d}")}},computed:{token:function(){return r.a.get("access_token")}},methods:{getNowTime:function(){var e=new Date;this.businessId=e.getTime()},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/png"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传logo图片只能是 png 格式!"),o||this.$message.error("上传logo图片大小不能超过 2MB!"),t&&o},hasPerms:function(e){return Object(c.a)(e)&!this.disabled},handleSelectionChange:function(e){this.multipleSelection=e},getOrgList:function(){var e=this,t={pageNum:this.pageAt,pageSize:this.pageSize,orgName:this.orgName};l.a.getOrgList(t).then(function(t){e.recordCount=t.total,e.tableList=t.records||[],setTimeout(function(){e.$utils.setSelectRow(e.multipleSelectionAllIds,e.$refs.singleTable,e.tableList)},200)}).catch(function(e){console.log("获取数据出现异常")})},doAdd:function(){this.showDialog=!0,this.dialogTitle="新增",this.org={rowId:"",orgCode:"",orgName:"",respUserId:"",orgType:"",businessId:""},this.getNowTime()},saveOrUpdate:function(e,t){var o=this;this.$refs[t].validate(function(e){if(!e)return!1;o.org.businessId=o.businessId,l.a.editOrg(o.org).then(function(e){o.showDialog=!1,o.$message({type:"success",message:"新增"==o.dialogTitle?"新增成功!":"修改成功!"}),o.getOrgList()},function(e){o.showDialog=!1,o.$message.error("数据访问失败，无法执行该操作!")},!1)})},sureDelete:function(e){var t=this;this.$confirm("确定要删除此条记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.doDelete(e)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},doDelete:function(e){var t=this;l.a.deleteRow(e).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getOrgList()},function(e){t.$message.error("网络异常，无法执行该操作!")},!1)},doModify:function(e){this.showDialog=!0,this.dialogTitle="修改",this.org=i()(this.org,e),this.businessId=this.org.rowId,this.imageUrl="/imgs/logo/"+this.org.rowId+".png"},cannelUpdate:function(e){this.$refs[e].resetFields(),this.showDialog=!1,this.getOrgList()},pagePost:function(e){this.multipleSelectionAllIds=this.$utils.changePageCoreRecordData(this.multipleSelectionAllIds,this.multipleSelection,this.tableList),this.pageAt=e,this.getOrgList()},pageSizePost:function(e){this.multipleSelectionAllIds=this.$utils.changePageCoreRecordData(this.multipleSelectionAllIds,this.multipleSelection,this.tableList),this.pageSize=e,this.getOrgList()}},mounted:function(){this.getOrgList()}},g={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",{staticClass:"app-container userManage"},[o("el-col",[o("div",{staticClass:"container"},[o("div",{staticClass:"heading"},[o("el-input",{staticClass:"search",attrs:{size:"small",placeholder:"请输入公司名称",span:4},model:{value:e.orgName,callback:function(t){e.orgName=t},expression:"orgName"}}),e._v(" "),o("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.getOrgList}},[e._v("查询")]),e._v(" "),e.hasPerms("org-xz001")?o("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.doAdd}},[e._v("新增")]):e._e()],1),e._v(" "),o("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableList,border:"","tooltip-effect":"dark","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{property:"orgName",label:"公司名称"}}),e._v(" "),o("el-table-column",{attrs:{property:"respUserId",label:"负责人"}}),e._v(" "),o("el-table-column",{attrs:{property:"createTime",label:"创建时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("formatDate")(t.row.createTime))+"\n            ")]}}])}),e._v(" "),o("el-table-column",{attrs:{property:"updateTime",label:"更新时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("formatDate")(t.row.updateTime))+"\n            ")]}}])}),e._v(" "),o("el-table-column",{attrs:{fixed:"right",width:"270",label:"操作","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPerms("org-sc001")?o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.sureDelete(t.row.rowId)}}},[e._v("删除")]):e._e(),e._v(" "),e.hasPerms("org-xg001")?o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.doModify(t.row)}}},[e._v("修改")]):e._e()]}}])})],1),e._v(" "),o("div",{staticClass:"pagination-wrapper"},[o("el-pagination",{attrs:{"current-page":e.pageAt,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.recordCount},on:{"current-change":e.pagePost,"size-change":e.pageSizePost}})],1),e._v(" "),o("el-dialog",{attrs:{width:"40%","append-to-body":!0,title:e.dialogTitle,visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t},close:function(t){return e.cannelUpdate("ruleForm")}}},[o("el-form",{ref:"ruleForm",attrs:{model:e.org,rules:e.rules}},[o("el-form-item",{attrs:{label:"公司名称","label-width":e.formLabelWidth,prop:"orgName"}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{size:"medium","auto-complete":"off",placeholder:""},model:{value:e.org.orgName,callback:function(t){e.$set(e.org,"orgName",t)},expression:"org.orgName"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"公司责任人","label-width":e.formLabelWidth,prop:"respUserId"}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{size:"medium","auto-complete":"off",placeholder:""},model:{value:e.org.respUserId,callback:function(t){e.$set(e.org,"respUserId",t)},expression:"org.respUserId"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"公司logo","label-width":e.formLabelWidth}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/SERVICE-MD/org/upload",headers:{access_token:e.token,Authorization:"bearer "+e.token},data:{businessId:e.businessId},"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){return e.cannelUpdate("ruleForm")}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveOrUpdate(e.org,"ruleForm")}}},[e._v("确 定")])],1)],1),e._v(" "),o("el-dialog",{staticClass:"tipDialog",attrs:{"modal-append-to-body":!1,title:"提示",visible:e.tipDialog,size:"tiny"},on:{"update:visible":function(t){e.tipDialog=t}}},[o("span",{staticClass:"el-icon-circle-check"}),e._v(" "),o("span",{staticClass:"tipDialogTxt"},[e._v(e._s(e.tipDialogTxt))]),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.tipDialog=!1}}},[e._v("确 定")])],1)])],1)])],1)},staticRenderFns:[]};var d=o("VU/8")(u,g,!1,function(e){o("fdD0")},null,null);t.default=d.exports}});