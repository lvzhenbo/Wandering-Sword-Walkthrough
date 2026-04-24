# 《逸剑风云决》攻略

基于 VitePress 搭建的《逸剑风云决》攻略文档站，内容主要由虚饮茶所著，覆盖主线章节、关键支线、结局条件，以及图纸、心法、武学、轻功、传承、专属装备、食谱等整理资料。

## 本地开发

项目当前使用 pnpm 管理依赖，脚本定义如下：

```bash
pnpm install
pnpm docs:dev
```

常用命令：

```bash
pnpm docs:dev      # 启动本地开发服务器
pnpm docs:build    # 生成静态站点
pnpm docs:preview  # 本地预览构建结果
```

## 技术栈

- VitePress `2.0.0-alpha.17`
- Vue `^3.5.33`

## 构建产物

执行 `pnpm docs:build` 后，VitePress 会生成静态站点产物。
