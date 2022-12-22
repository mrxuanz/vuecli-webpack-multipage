# Vuecli-Webpack-Multipage

### 介绍

VueCli-Webpack-Multipage，基于 Vue-CLI 5、Vue3、vue-router、TypeScript 开源的一套多页面配置模板。
目的是为了解决程序嵌入静态页面的生成与管理，添加页面无需更新配置只需按规则添加目录与文件。解决由于页面创建过多热更新的卡顿与打包时间过长的问题。

### 项目功能

- 无需繁琐配置，在 views 目录下按规则创建目录与文件，自动生成对应页面。
- 基于最新脚手架所用的 Webpack5 进行配置优化，多个页面也会有很好的打包速度与热更新速度

### 安装使用步骤

- **Install：**

```text
npm install
```

- **Run：**

```text
npm run dev
npm run serve
```

- **新增页面：**

```text
在项目src目录下
views/
--|PageName /
-----| App.vue
-----| main.ts
```
