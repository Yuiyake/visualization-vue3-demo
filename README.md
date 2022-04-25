# Visualization-Demo

#### 介绍
- Vue3+TS+Pinia+Echarts+node的可视化项目
- 本项目用的是Vite构建
- 参考：[b站：小满](https://www.bilibili.com/video/BV1dS4y1y7vd?p=62)

#### 软件架构
软件架构说明
```
├── node                       # nodejs - express框架
│   └── index.ts               # 入口文件
│── visualization              # web项目
│   │── src                    # 源代码
│   ├── server                 # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── store                  # 全局 store管理
│   ├── App.vue                # 入口页面（主页面）
│   └── main.ts                # 入口文件 加载组件 初始化等
│   ├── vite.config.js             # vite 配置
│   ├── tsconfig.js                # ts 配置
└── └── package.json               # package.json
```

#### 安装教程
- 安装：
    1.  git clone https://gitee.com/beaker/visualization-demo.git
    2.  打开cmd
    3.  npm install
- 运行：
    1.  服务器：运行node下的index.ts
    2.  web： dev

#### 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

