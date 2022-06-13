## docker安装jenkins.md
### 安装Jenkins
通过docker拉取Jenkins镜像
```code
 // 拉取镜像
 docker pull jenkinsci/blueocean
 
 // 查看镜像
 docker images
 
 //创建容器
 docker run  -d -p 8080:8080  --name myjenkins    -v /root/jenkins-home:/root/jenkins_home  jenkinsci/blueocean 
 
 // 浏览器打开jenkins
 http://localhost:8080
```

### Jenkins帐号
#### 解锁Jenkins
![图片](./imgs/20170822111233744.png
```code
// 进入jenkins容器
docker exec -it [container ID] sh
// 获取初始密码
cat /var/jenkins_home/secrets/initialAdminPassword

输入后即使jenkins的初始化配置
```
#### 创建用户
<img src="./imgs/xhjgkpjg86.png" width="50%">

* 登录后进系统管理

###  Jenkins配置
* 系统管理
* <img src="./imgs/ad94724f-1f83-4310-9bac-5548f654349b.jpg" width="50%">

### 参考
* https://ci.jenkins.io/
* https://cloud.tencent.com/developer/article/1379404
