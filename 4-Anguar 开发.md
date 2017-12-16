<!--
$theme: gaia
template: gaia
-->

Angular开发基础<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
---
为什么要学习angular?
===

1. 精良的软件架构
2. 全面的软件测试
3. 完善的组件化方案
4. 庞大的社区支持
5. 代表着未来的技术趋势
6. 已经成熟，并且已经稳定
7. 节约大量的时间
8. 项目的质量可以保证

---
Angular的问题
===
1. 使用了比较高级的技术
2. 学习成本偏高
3. 架构高端，理解困难
4. 代码基于模板与装饰器，不适合初学者

---
1.x 与 2+的区别
===
1. 1.x 与 2+是完全不同的框架
2. 但是2+继承了一些1.x的基本理念
3. 2+是基于TypeScript的，1.x是基于js的
4. 2+是组件化的框架，1.x不是





---
快速上手
===

1. 安装cli
```
npm install -g @angular/cli
```
2. 创建个项目
```
ng new my-app
```
3.  运行项目
```
cd my-app
ng serve --open
```

---

`ng serve --open`里的--open (或者 -o)选项会自动在浏览器打开地址： http://localhost:4200/

4. 修改组件内容
```
// src/app/app.component.ts
export class AppComponent {
  title = 'My First Angular App';
}
```
5. 修改css
```
// src/app/app.component.css
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
```

---
项目文件说明
===
1. README.md
介绍了ng命令的基本用法。
包括如何运行项目，如何使用脚手架，如何构建项目，如何测试项目，以及进行E2E测试

2. tsconfig.json
默认的TytpeScript配置，包含了Decorator等支持

3. tslint.json
ts代码的风格规范
`ng lint`时会调用到

---
4. .gitignore
git忽略的文件

5. .editorconfig
编辑配置信息

6. .angular-cli.json
angular cli 配置信息

7. karma.conf.js
Angular测试框架Karma的测试配置

8. protractor.conf.js
E2E测试框架protractor的配置

9. src
angular源码

---
源码目录介绍
===
1. app目录
存放应用代码的地方，大部分的代码都在这里编写

2. assets目录
存放常规文件的地方

3. environments目录
存放环境配置的地方

4. favicon.ico
网站图标

5. index.html
默认的访问文件

---

6. main.ts
默认的angular调用脚本文件，是编译器编译的文件，也是根模块(Root Module)加载的地方。

7. polyfills.ts
一个用于normalize浏览器差异的文件。

8. styles.css
全局的样式

9. test.ts
单元测试的进入点(Entry Point)

10. tsconfig.{app|spec}.json
Angular应用的TypeScript编译配置信息，.app.json作用于应用， .spec.json作用于测试

---
测试ng框架
===

执行

```
ng test
```
既可对框架进行测试。

- ng测试通常需要有默认的浏览器。
一般使用Chrome来测试。
对于ubuntu，一般使用chromium-browser。所以可以使用下面的命令安装：
```
sudo apt-get install chromium-browser
```

---

这里通常还需要配置一下CHROME_BIN参数

```
export CHROME_BIN=chromium-browser
```
通常我们可以测试正确并得到结果如下：
```
 10% building modules 1/1 modules 0 active16 12 2017 16:12:34.282:WARN [karma]: No captured browser, open http://localhost:9876/
16 12 2017 16:12:34.296:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
16 12 2017 16:12:34.296:INFO [launcher]: Launching browser Chrome with unlimited concurrency
16 12 2017 16:12:34.306:INFO [launcher]: Starting browser Chrome
16 12 2017 16:12:44.779:WARN [karma]: No captured browser, open http://localhost:9876/  
16 12 2017 16:12:45.275:INFO [Chromium 63.0.3239 (Ubuntu 0.0.0)]: Connected on socket uxM1um9TOvv91w20AAAA with id 1347711
Chromium 63.0.3239 (Ubuntu 0.0.0): Executed 3 of 3 SUCCESS (0.393 secs / 0.365 secs)
```
---
使用bootstrap
===

1. 安装npm模块
```
npm install ngx-bootstrap --save
```

2. 添加css地址到index.html
```
// v3
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

// v4:
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet">
```
---

---












