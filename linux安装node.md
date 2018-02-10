1. 先下载node文件。下载下来的文件默认是.xz文件
$ xz -d node.tar.xz
$ tar -xvf node.tar


2. 配置nodejs
```
ln -s 你安装的node目录(/home/blue/soft/node/bin/node) /usr/local/bin/node  
ln -s 你安装的npm目录(/home/blue/soft/node/bin/npm) /usr/local/bin/npm
```