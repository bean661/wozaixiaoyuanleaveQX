const request = require('request');
// 导入
const fs = require('fs')
module.exports = {
	* beforeSendResponse(requestDetail, responseDetail) {
		//getlist
		if (requestDetail.url === 'https://gw.wozaixiaoyuan.com/leave2/mobile/student/leave/getMyLeavesList?page=1&size=10') {
			///home/data.json
			var newData = "";
			const newResponse = responseDetail.response;
			new Promise(function(resolve) {
				fs.readFile('/home/wzxy.json', 'utf8', (err, data) => {
					if (err) {
						console.log(err)
						return
					}
					newData = data.toString();
					newData = JSON.parse(newData);
					console.log("newjsonData:", newData);
					//时间
					Date.prototype.format = function(fmt) {
						var o = {
							"M+": this.getMonth() + 1, //月份
							"d+": this.getDate(), //日
							"h+": this.getHours(), //小时
							"m+": this.getMinutes(), //分
							"s+": this.getSeconds(), //秒
							"q+": Math.floor((this.getMonth() + 3) / 3), //季度
							"S": this.getMilliseconds() //毫秒
						};
						if (/(y+)/.test(fmt)) {
							fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
								.substr(4 - RegExp.$1.length));
						}
						for (var k in o) {
							if (new RegExp("(" + k + ")")
								.test(fmt)) {
								fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k])
									.substr(("" + o[k])
										.length)));
							}
						}
						return fmt;
					}
					function getFormatTime(time, flag) {
						if (flag === 1) {
							return time.format("yyyy-MM-dd hh:mm")
						} else {
							return time.format("MM-dd hh:mm")
						}
					}
					start = ""
					end = ""
					var time = new Date()
					time.setMinutes(0)
					if (start === "" && end === "") {
						nowHour = time.getHours()
						//开始时间
						time.setHours(Math.max(0, (nowHour - 1)))
						start = getFormatTime(time, 1)
						//结束时间
						time.setHours(Math.min(23, (nowHour + 3)))
						end = getFormatTime(time, 1)
					}
					var data = {
						"code": 0,
						"data": [{
							"avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
							"beginTime": start,
							"finalTime": end,
							"id": "888888888888888888",
							"leaveType": "事假",
							"leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
							"leaveTypeId": "55000401",
							"name": "测试",
							"reason": "",
							"status": 40
						}, {
							"avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
							"beginTime": "2022-08-29 12:40",
							"finalTime": "2022-08-29 15:06",
							"id": "888888888888888888",
							"leaveType": "事假",
							"leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
							"leaveTypeId": "55000401",
							"name": "测试",
							"reason": "办事",
							"status": 30
						}, {
							"avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/avatar/avatar-06.png/s",
							"beginTime": "2022-07-26 10:36",
							"finalTime": "2022-07-26 12:07",
							"id": "888888888888888888",
							"leaveType": "事假",
							"leaveTypeIcon": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/leaveTypeIcon/shijia.png/s",
							"leaveTypeId": "55000401",
							"name": "测试",
							"reason": "办事",
							"status": 30
						}]
					}

					newResponse.body = JSON.stringify(data);
					console.log("添加后：" + JSON.stringify(data));

				});
				console.log('promise1');
			});
			return new Promise((resolve, reject) => {
				setTimeout(() => { // delay the response for 5s
					resolve({
						response: newResponse
					});
				}, 1000);
			});
		}

		//getLeave
		if (requestDetail.url === 'https://gw.wozaixiaoyuan.com/leave2/mobile/student/leave/getProof?leavesId=888888888888888888') {
			///home/data.json
			var newData = "";
			const newResponse = responseDetail.response;
			new Promise(function(resolve) {
				fs.readFile('/home/wzxy.json', 'utf8', (err, data) => {
					if (err) {
						console.log(err)
						return
					}
					newData = data.toString();
					newData = JSON.parse(newData);
					console.log("newjsonData:", newData);
					//时间
					Date.prototype.format = function(fmt) {
						var o = {
							"M+": this.getMonth() + 1, //月份
							"d+": this.getDate(), //日
							"h+": this.getHours(), //小时
							"m+": this.getMinutes(), //分
							"s+": this.getSeconds(), //秒
							"q+": Math.floor((this.getMonth() + 3) / 3), //季度
							"S": this.getMilliseconds() //毫秒
						};
						if (/(y+)/.test(fmt)) {
							fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
								.substr(4 - RegExp.$1.length));
						}
						for (var k in o) {
							if (new RegExp("(" + k + ")")
								.test(fmt)) {
								fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k])
									.substr(("" + o[k])
										.length)));
							}
						}
						return fmt;
					}
					function getFormatTime(time, flag) {
						if (flag === 1) {
							return time.format("yyyy-MM-dd hh:mm")
						} else {
							return time.format("MM-dd hh:mm")
						}
					}
					start = ""
					end = ""
					var time = new Date()
					time.setMinutes(0)
					if (start === "" && end === "") {
						nowHour = time.getHours()
						//开始时间
						time.setHours(Math.max(0, (nowHour - 1)))
						start = getFormatTime(time, 1)
						//结束时间
						time.setHours(Math.min(23, (nowHour + 3)))
						end = getFormatTime(time, 1)
					}
					var data = {
				"code": 0,
				"data": {
					"college": newData.name, //所在学院
					"area": newData.area, //所在校区
					"qrcode": "leave2@a9501780022e4edf9771973afd1e6dec",
					"start": start,
					"emergency": newData.phone,
					"type": "事假",
					"outSchoolLocation": "xxxxxxxx",
					"number": newData.number,
					"teacher": newData.teacher,
					"isOutSchool": 0,
					"grade": newData.grade,
					"name": newData.name,
					"logo": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwiki.pinggu.org%2FArticle%2FUploadFiles%2F200908%2F2009082610535720.jpg&refer=http%3A%2F%2Fwiki.pinggu.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664869946&t=4d4253c7a6ff824e3988f1d9ecfc6e20",
					"end": end,
					"id": "888888888888888888"
				}
			}
					newResponse.body = JSON.stringify(data);
					console.log("添加后：" + JSON.stringify(data));

				});
				console.log('promise1');
			});
			return new Promise((resolve, reject) => {
				setTimeout(() => { // delay the response for 5s
					resolve({
						response: newResponse
					});
				}, 1000);
			});
		}

		if (requestDetail.url === 'https://gw.wozaixiaoyuan.com/leave2/mobile/student/leave/getLeavesInfo?leavesId=888888888888888888') {
			///home/data.json
			var newData = "";
			const newResponse = responseDetail.response;
			new Promise(function(resolve) {
				fs.readFile('/home/wzxy.json', 'utf8', (err, data) => {
					if (err) {
						console.log(err)
						return
					}
					newData = data.toString();
					newData = JSON.parse(newData);
					console.log("newjsonData:", newData);
					//时间
					Date.prototype.format = function(fmt) {
						var o = {
							"M+": this.getMonth() + 1, //月份
							"d+": this.getDate(), //日
							"h+": this.getHours(), //小时
							"m+": this.getMinutes(), //分
							"s+": this.getSeconds(), //秒
							"q+": Math.floor((this.getMonth() + 3) / 3), //季度
							"S": this.getMilliseconds() //毫秒
						};
						if (/(y+)/.test(fmt)) {
							fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
								.substr(4 - RegExp.$1.length));
						}
						for (var k in o) {
							if (new RegExp("(" + k + ")")
								.test(fmt)) {
								fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k])
									.substr(("" + o[k])
										.length)));
							}
						}
						return fmt;
					}
					function getFormatTime(time, flag) {
						if (flag === 1) {
							return time.format("yyyy-MM-dd hh:mm")
						} else {
							return time.format("MM-dd hh:mm")
						}
					}
					start = ""
					end = ""
					submitTime=""
					fdycreateTime=""
					yuanjicreateTime=""
					xiaojicreateTime=""
					var time = new Date()
					time.setMinutes(0)
					if (start === "" && end === "") {
						nowHour = time.getHours()
						//开始时间
						time.setHours(Math.max(0, (nowHour - 1)))
						start = getFormatTime(time, 1)
						//结束时间
						time.setHours(Math.min(23, (nowHour + 3)))
						end = getFormatTime(time, 1)
					}
					if(submitTime === "" || fdycreateTime === "" || yuanjicreateTime === "" || xiaojicreateTime === "") {
						nowHour = time.getHours()
						//开始时间
						time.setHours(Math.max(0, (nowHour - 3)))
						time.setMinutes(Math.floor((Math.random() * 10) + 1))
						submitTime = getFormatTime(time, 1)
						//导员批准时间
						time.setMinutes(Math.floor((Math.random() * (21 - 11)) + 11))
						fdycreateTime = getFormatTime(time, 1)
						//院级批准时间
						time.setMinutes(Math.floor((Math.random() * (31 - 21)) + 21))
						yuanjicreateTime = getFormatTime(time, 1)
						//校级批准时间
						time.setMinutes(Math.floor((Math.random() * (41 - 31)) + 31))
						xiaojicreateTime = getFormatTime(time, 1)
					}

					var data = {
						"code": 0,
						"data": {
							"approved": 0,
							"leaves": {
								"accessory": "[]",
								"area": newData.name,
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
								"emergencyContact": newData.phone, //手机号
								"endTime": end,
								"finalTime": end,
								"gender": "男",
								"id": "486544888888888888",
								"isFixed": 0,
								"isOut": 2,
								"isOutSchool": 0,
								"leaveLocation": "\""+newData.leaveLocation+"\"", //提交信息时的位置信息
								"leaveSettingId": "5500040101",
								"leaveType": "事假",
								"leaveTypeId": "55000401",
								"levelType": "[{\"id\":\"550004010101\",\"info\":\"30\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":1,\"type\":0},{\"id\":\"550004010102\",\"info\":\"40\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":2,\"type\":0},{\"id\":\"550004010103\",\"info\":\"50\",\"isFixed\":0,\"leaveSettingId\":\"5500040101\",\"level\":3,\"type\":0}]",
								"major": "",
								"name": newData.name, //姓名
								"number": "12345",
								"phone": newData.phone, //手机号
								"reason": newData.reason, //请假理由
								"schoolId": "99",
								"status": 40,
								"submitTime": submitTime,
								"teacherId": "471607588888888888",
								"teacherName": newData.teacher, //辅导员名称
								"type": 10,
								"userId": "404788888888888888",
								"year": 2022
							},
							"approveList": [{
								"avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/status/nvlaoshi.png/s", //nvlaoshi.png or nanlaoshi.png
								"college": "xx",
								"context": "同意",
								"createTime": fdycreateTime,
								"id": "486547888888888888",
								"isPass": 20,
								"leavesId": "486888888888888888",
								"level": 1,
								"name": newData.teacher, //辅导员名称
								"schoolId": "99",
								"type": 10,
								"userId": "478888888888888888",
								"userType": "辅导员"
							}, {
								"avatar": "https://wzxy-img.oss-cn-beijing.aliyuncs.com/leaves_2/static/status/nvlaoshi.png/s",  //nvlaoshi.png or nanlaoshi.png
								"college": "xxxxxxxxxxx",
								"context": "同意，注意安全。",
								"createTime": yuanjicreateTime,
								"id": "486547888888888888",
								"isPass": 20,
								"leavesId": "486888888888888888",
								"level": 2,
								"name": newData.clloegeTeacher, //院级领导名称
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
								"name": newData.schoolTeacher, //校级领导名称
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
					};
					newResponse.body = JSON.stringify(data);
					console.log("添加后：" + JSON.stringify(data));

				});
				console.log('promise1');
			});
			return new Promise((resolve, reject) => {
				setTimeout(() => { // delay the response for 5s
					resolve({
						response: newResponse
					});
				}, 1000);
			});
		}
	},
};