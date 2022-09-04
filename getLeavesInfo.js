/*
作者：bean661 QQ群：808655664
脚本仓库地址：https://github.com/bean661/wozaixiaoyuanleave
只需该body里的 有注释的地方
测试案例，仅供研究使用！
测试案例，仅供研究使用！
测试案例，仅供研究使用！
 */
Date.prototype.format = function(fmt) {
  var o = {
     "M+" : this.getMonth()+1,                 //月份
     "d+" : this.getDate(),                    //日
     "h+" : this.getHours(),                   //小时
     "m+" : this.getMinutes(),                 //分
     "s+" : this.getSeconds(),                 //秒
     "q+" : Math.floor((this.getMonth()+3)/3), //季度
     "S"  : this.getMilliseconds()             //毫秒
 };
 if(/(y+)/.test(fmt)) {
         fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 }
  for(var k in o) {
     if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
  }
 return fmt;
}

function getFormatTime(time,flag) {
  if(flag === 1) {
      return time.format("yyyy-MM-dd hh:mm")
  } else {
      return time.format("MM-dd hh:mm")
  }
}


//指定假期开始时间结束时间 格式 "2021-06-28 10:00"
//不指定则默认开始时间为当前 前1小时，结束时间当前 后2小时，不同时间打开会改变
start = ""
end = ""
submitTime=""
fdycreateTime=""
yuanjicreateTime=""
xiaojicreateTime=""
var time = new Date()
time.setMinutes(0)
if(start==="" && end === ""){
    nowHour = time.getHours()
    //开始时间
    time.setHours(Math.max(0,(nowHour - 1)))
    start = getFormatTime(time,1)
    //结束时间
    time.setHours(Math.min(23,(nowHour+3)))
    end = getFormatTime(time,1)
}
if(submitTime === "" || fdycreateTime === "" || yuanjicreateTime === "" || xiaojicreateTime === ""){
    nowHour = time.getHours()
    //开始时间
    time.setHours(Math.max(0,(nowHour - 1)))
    time.setMinutes(Math.floor((Math.random()*10)+1))
    submitTime = getFormatTime(time,1)
    //导员批准时间
    time.setMinutes(Math.floor((Math.random()*(21-11))+11))
    fdycreateTime = getFormatTime(time,1)
    //院级批准时间
    time.setMinutes(Math.floor((Math.random()*(31-21))+21))
    yuanjicreateTime = getFormatTime(time,1)
    //校级批准时间
    time.setMinutes(Math.floor((Math.random()*(41-31))+31))
    xiaojicreateTime = getFormatTime(time,1)
}

body={
  "code": 0,
  "data": {
    "approved": 0,
    "leaves": {
      "accessory": "[]",
      "area": "xxxxx",
      "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
      "beginTime": start,
      "classesId": "123",
      "classesName": "xxxxx",
      "college": "xxx",
      "degree": "xxxx",
      "destinationCity": "",
      "destinationLocation": "",
      "destinationProvince": "",
      "destinationStreet": "",
      "emergencyContact": "18899998888", //手机号
      "endTime": end,
      "finalTime": end,
      "gender": "男",
      "id": "486544888888888888",
      "isFixed": 0,
      "isOut": 2,
      "isOutSchool": 0,
      "leaveLocation": "\"陕西省西安市雁塔区xx路888号\"", //提交信息时的位置信息
      "leaveSettingId": "5500040101",
      "leaveType": "事假",
      "leaveTypeId": "55000401",
      "levelType": "[{\"id\":\"550004010101\",\"info\":\"30\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":1,\"type\":0},{\"id\":\"550004010102\",\"info\":\"40\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":2,\"type\":0},{\"id\":\"550004010103\",\"info\":\"50\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":3,\"type\":0}]",
      "major": "",
      "name": "张三", //姓名
      "number": "12345",
      "phone": "xxxxxxxxxxx", //手机号
      "reason": "出去办事", //请假理由
      "schoolId": "99",
      "status": 40,
      "submitTime": submitTime,
      "teacherId": "471607588888888888",
      "teacherName": "xxx", //辅导员名称
      "type": 10,
      "userId": "404788888888888888",
      "year": 2022
    },
    "approveList": [{
      "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/status/nvlaoshi.png/s", //nvlaoshi.png or nanlaoshi.png
      "college": "xxxx",
      "context": "同意",
      "createTime": fdycreateTime,
      "id": "486547888888888888",
      "isPass": 20,
      "leavesId": "486888888888888888",
      "level": 1,
      "name": "xxx", //辅导员名称
      "schoolId": "99",
      "type": 10,
      "userId": "478888888888888888",
      "userType": "辅导员"
    }, {
      "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/status/nvlaoshi.png/s",  //nvlaoshi.png or nanlaoshi.png
      "college": "xxxxxxxxxxx",
      "context": "",
      "createTime": yuanjicreateTime,
      "id": "486547888888888888",
      "isPass": 20,
      "leavesId": "486888888888888888",
      "level": 2,
      "name": "xxx", //院级领导名称
      "schoolId": "99",
      "type": 10,
      "userId": "478888888888888888",
      "userType": "院级"
    }, {
      "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/status/nanlaoshi.png/s", //nvlaoshi.png or nanlaoshi.png
      "college": "xxx",
      "context": "",
      "createTime": xiaojicreateTime,
      "id": "486547888888888888",
      "isPass": 20,
      "leavesId": "486888888888888888",
      "level": 3,
      "name": "xxx", //校级领导名称
      "schoolId": "99",
      "type": 10,
      "userId": "478888888888888888",
      "userType": "校级"
    }],
    "fieldList": [{
      "field": "accessory",
      "id": "5588888888",
      "leaveSettingId": "5500040101",
      "maxLength": 9,
      "maxSize": 512,
      "name": "附件上传",
      "required": false,
      "schoolId": "99",
      "seq": 1,
      "styles": 1,
      "tag": 1,
      "type": 9
    }]
  }
}


body = JSON.stringify(body);

console.log(body);

$done(body);
