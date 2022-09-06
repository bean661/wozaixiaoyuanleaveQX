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


//学校名字
college="北京大学"
//校区
area="临潼校区"
//紧急联系电话
emergency="18899999999"
//学号
number="8888"
//辅导员
teacher = "李四"
//年级
grade = "2099级"
//姓名
var name = "张三"
//学校校徽logo url
logoUrl = ""
//指定假期开始时间结束时间 格式 "2021-06-28 10:00"
//不指定则默认开始时间为当前 前1小时，结束时间当前 后2小时，不同时间打开会改变
start = ""
end = ""

qrcode="leave2@a9501780022e4edf9771973afd1e6dec"

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
  "data": {
    "college": college,
    "area": area,
    "qrcode": qrcode,
    "start": start,
    "emergency": emergency,
    "type": "事假",
    "outSchoolLocation": "",
    "number": number,
    "teacher": teacher,
    "isOutSchool": 0,
    "grade": grade,
    "name": name,
    "logo": logoUrl,
    "end": end,
    "id": "483358919238899999"
  }
}


body = JSON.stringify(body);

console.log(body);

$done(body);
