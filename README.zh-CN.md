<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


<p align="center">部署在 vercel 上的 Nestjs Serverless 启动模板🧸</p>

<p align='center'>
<a href="https://nest-start.leostar.top/">👀预览示例</a>
</p>

<p align='center'>
<a href="https://github.com/ileostar/nest-starter/blob/main/README.md">English</a> | <b>简体中文</b>
</p>


## ✨启动

### GitHub 模版

[使用该模版创建你的仓库👈](https://github.com/ileostar/nest-starter/generate).

### Vercel 部署

一键部署到Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ileostar/nest-starter)

## 🧾清单

当您使用此模板时，请尝试按照清单正确更新您的信息

- [ ] 更改许可证中的作者姓名
- [ ] 更改package.json中的信息
- [ ] 更改docker-compose.yml中的配置
- [ ] 把 `.env.example`/`.env.prod.example` 改为 `.env`/`.env.prod`
- [ ] 移除。包含资金信息的github文件夹
- [ ] 清理READMEs

nd, enjoy :)

## 🍚食用

### 安装

```bash
pnpm install
```

### 运行

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### 测试

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

### 构建

要构建服务，请运行

```bash
$ pnpm build
```

您将看到dist中准备提供的生成文件。

### Docker构建运行

```bash
$ docker-compose up --build
```
