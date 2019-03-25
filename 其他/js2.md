## 1. 缓存机制
强缓存（返回200）和协商缓存（命中缓存304）
强缓存：expires和cache-control:后者的优先级高于前者。
协商缓存，1，last-modified（文件的最后修改时间），if-last-modified发送last-modified到服务端，
协商缓存，2, etag(文件指纹)，if-no-match会把etag发送给服务端，如果有跟新则返回更新资源
![sa](https://img-blog.csdn.net/20180724100127451?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW94aWFuMTIzMzM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
