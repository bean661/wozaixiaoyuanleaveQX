/*
作者：bean661 QQ群：808655664
脚本仓库地址：https://github.com/bean661/wozaixiaoyuanleave
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


//姓名  张三
var name = "张三"

//reason 请假理由
var reason = "xxxxxx"

//指定假期开始时间结束时间 格式 "2021-06-28 10:00"
//不指定则默认开始时间为当前 前1小时，结束时间当前 后2小时，不同时间打开会改变
start = ""
end = ""





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

body={
  "code": 0,
  "data": [{
    "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
    "beginTime": start,
    "finalTime": end,
    "id": "486544602413888888",
    "leaveType": "事假",
    "leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
    "leaveTypeId": "55000401",
    "name": name,
    "reason": reason,
    "status": 40  //40为进行中
  }, {
    "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
    "beginTime": "2022-08-26 16:28",
    "finalTime": "2022-08-20 20:37",
    "id": "483358919238888888",
    "leaveType": "事假",
    "leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
    "leaveTypeId": "55000401",
    "name": name,
    "reason": "办事",
    "status": 50
  }, {
    "avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
    "beginTime": "2022-07-25 19:47",
    "finalTime": "2022-07-29 18:07",
    "id": "483323849866288888",
    "leaveType": "事假",
    "leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
    "leaveTypeId": "55000401",
    "name": name,
    "reason": "办事",
    "status": 30
  }]
}


body = JSON.stringify(body);

console.log(body);

$done(body);
