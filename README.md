hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录 简写：hexo g
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server） 简写：hexo s，可用--debug
hexo deploy #将.deploy目录部署到GitHub 简写：hexo d
hexo d -g #组合命令，先生成页面，后部署到Github
