# 我在校园自动打卡 模拟假条列表 以及二维码页面
ios quantumult x， 模拟假条列表、凭证
自行下载脚本到script文件夹

```

#模拟假条列表
[rewrite_local]
^https?:\/\/gw\.wozaixiaoyuan\.com\/leave2\/mobile\/student\/leave\/getMyLeavesList\?page=1&size=10 url script-response-body getList.js

#模拟假条凭证
[rewrite_local]
^https:\/\/gw\.wozaixiaoyuan\.com\/leave2\/mobile\/student\/leave\/getProof\?leavesId=[0-9]+ url script-response-body getProof.js
```
