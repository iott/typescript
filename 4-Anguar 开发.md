<!--
$theme: gaia
template: gaia
-->

Angular开发基础<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
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









