# 我在校园自动打卡 模拟假条列表 、二维码页面、详细信息
ios quantumult x， 模拟假条列表、凭证、详细信息 

自行下载脚本到script文件夹

```

#模拟假条列表
[rewrite_local]
^https?:\/\/gw\.wozaixiaoyuan\.com\/leave2\/mobile\/student\/leave\/getMyLeavesList\?page=1&size=10 url script-response-body getList.js

#模拟假条凭证
[rewrite_local]
^https:\/\/gw\.wozaixiaoyuan\.com\/leave2\/mobile\/student\/leave\/getProof\?leavesId=[0-9]+ url script-response-body getProof.js

#模拟假条详细信息
[rewrite_local]
^https?:\/\/gw\.wozaixiaoyuan\.com\/leave2\/mobile\/student\/leave\/getLeavesInfo\?leavesId=[0-9]+ url script-response-body getLeavesInfo.js

```

**项目已废弃**
**仅供交流学习，请在下载后24小时内删除。一切责任由使用者自负，与作者无关。**
**仅供交流学习，请在下载后24小时内删除。一切责任由使用者自负，与作者无关。**

**仅供交流学习，请在下载后24小时内删除。一切责任由使用者自负，与作者无关。**

