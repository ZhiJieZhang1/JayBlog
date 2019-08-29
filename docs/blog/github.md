# 部署Github Pages的记录

Github Pages 不能运行动态程序，只能输出一些静态内容。因此 Github Pages 非常适合用于前端项目的展示。可用于存放项目介绍、项目文档或者个人博客。本文介绍了怎么用 Travis CI 自动化部署 Github Pages。

## Github Pages

是GitHub为每一位Gitgay提供的静态页面服务，[GitHub Pages](https://pages.github.com/)官网

- 每个账号有一个顶级的域名 `<username>.github.io`
  - 顶级域名的部署需要创建一个`<username>.github.io`这个名字的仓库
- 每个仓库有一个仓库名对应的 `<username>.github.io/<repoName>/`
  - 默认不启用GitHub Pages，在仓库setting中设置

## Travis CI

<img :src="$withBase('/TravisCI.png')" alt="Travis CI"><br/>
[Travis CI](https://travis-ci.com) 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。  

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。  

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。  

## 部署步骤

### 1.安装 GitHub App

在 [Github Market Place](https://github.com/marketplace)安装 Travis CI。配置项目权限。  
当然你也可以在安装完之后再配置，在 GitHub个人账户>setting>Applications 下找到 Travis CI,

### 2.配置GitHub Token
在  GitHub 的 Developer settings  
token的权限后期可以修改

<img :src="$withBase('/1567063318001.jpg')"><br/>

::: warning
生成token后不要直接刷新，先复制token，因为他只出现这一次
:::

### 3.增加 .travis.yml 文件

在你GitHub项目对应的本地的根目录下新建 .travis.yml

### 4.加密GitHub Token

准备travis客户端

```sh
gem install travis  # 安装 travis 客户端
travis login --pro  # 登录GitHub账号
travis encrypt GITHUB_TOKEN=<YOUR_GITHUB_TOKEN> --add  # 生成加密token，-add 自动添加到.travis.yml，因为他不会自动生成所以前面我们先添加了.travis.yml这个文件
```

### 5.详细配置 .travis.yml

```yaml
sudo: required
language: node_js  # 指定运行环境
node_js:  
- '10'  # node版本
before_install:
- yarn  # 执行安装依赖
script:
- yarn build  # 执行打包
env:
  global:
  - secure: '生成的加密串' # 生成的加密串
deploy:
  provider: pages # 解析支持者为GitHub Pages
  skip-cleanup: true  # 必须打开，防止构建时仓库变动引起误删除
  keep-history: true  # 禁止travis对你的GitHub项目进行强制推送
  target-branch: master # 打完包要推送的仓库的分支
  github-token: $GITHUB_TOKEN # 加密时对应的token变量
  local-dir: /dist # travis 打完包推送到GitHub的目录
  repo: <username>/<username>.github.io # 要推送的目标仓库，默认是本仓库
  on:
    branch: master  # local-dir 所在的分支
```

::: tip
关于deploy官网解释 [部署GitHub Pages](https://docs.travis-ci.com/user/deployment/pages/)
:::

### 6.其他

除此之外，你还可以在GitHub对应项目的设置里面travis配置hook和[Travis CI](https://travis-ci.com)官网进行其他的配置，其实默认配置基本就可以，除了权限以外。
