
# fullStackWebApp

> 这是一个简单的全站web App，基于Deno + Vue + Mysql.

## Client

> 运行在Brower里的应用程序`code`。（html + js + css）

## Server （1）

> 运行在Linux上的Web服务器

功能：

- 响应浏览器Http请求

```sh
#安装解压工具
sudo apt install unzip

#安装deno
curl -fsSL https://deno.land/x/install/install.sh | sh

#拷贝二进制文件
sudo .deno/bin/deno /usr/bin

#检查是否安装成功
deno --version

git clone https://~~

touch mod.js
vim mod.js

deno run --allow-net mod.js

curl localhost:8080

netstat -natp
```
## DataBase

> 持久化数据，保存Brower浏览器端用户需要的数据

