1. 安装yo
```
npm install -g yo
```
2. 安装TypeScript的Node开发环境生成器
```
npm install -g generator-node-typescript
```
3. 创建项目文件夹

```
mkdir my-new-project && cd $_
```
4. 初始化项目
```
yo node-typescript
```

4. 生成新的类与相应的测试文件

```
yo node-typescript:classlib MyNewClass [--mocha | --ava]
```