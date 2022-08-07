# 下载安装

## 环境要求

寻空仅支持 x64 和 arm64 架构的 Windows 10 1809 及以上版本的系统，建议升级到最新版获得更稳定的体验。

## 安装

> 商店版和侧载版可以共存，但是因为公用一个数据库，二者版本不同时可能存在冲突。

### 商店版（推荐）

<br />
<a href="ms-windows-store://pdp/?productid=9N2SVG0JMT12">
    <img src="https://getbadgecdn.azureedge.net/images/en-us%20dark.svg" height="100" />
</a>

[商店页面](https://www.microsoft.com/store/apps/9N2SVG0JMT12)

应用商店的审核一般需要2个工作日，所以无法做到实时更新，但是商店应用能增量更新。

### 侧载版

> 安装侧载版需要信任自签名证书，此证书仅用于寻空相关项目的代码签名。

- 首次安装侧载版时请从 [GitHub Releases](https://github.com/xunkong/xunkong/releases) 页面下载最新的 zip 文件并解压
- 脚本安装
  - 在系统设置中打开 [**开发者选项**](ms-settings:developers) 界面，勾选 `开发人员模式` 和 `允许 PowerShell 脚本`
  - 找到 `Install.ps1`，在该文件的右键菜单中选择 `使用 PowerShell 运行`
  - **安装完成后一定要关闭 `允许 PowerShell 脚本`**
- 手动安装
  - 将 cer 证书文件添加到 `本地计算机/受信任人`
  - 在 `Dependencies` 文件夹下安装符合 CPU 架构的依赖包
  - 双击 msixbundle 文件进行安装
- 后续更新时下载符合 CPU 架构的 msixbundle 文件即可

**开发者选项截图**

<details>
<summary>Windows 10</summary>

![dev-setting-win10](https://file.xunkong.cc/static/repo/xunkong/dev-setting-win10.webp)

</details>

<details>
<summary>Windows 11</summary>

![dev-setting-win11](https://file.xunkong.cc/static/repo/xunkong/dev-setting-win11.webp)

</details>

## 后续

后续的使用教程请浏览 [帮助部分](../../help/desktop/index.md)。

## 可能遇到的问题

#### 无法加载文件 Install.ps1，因为在此系统中禁止执行脚本。

以管理员身份运行 PowerShell，输入 `Set-ExecutionPolicy RemoteSigned` ，然后按下回车。

上述语句的作用是允许本地计算机中未签名的脚本运行。

#### 应用安装在哪里

以 MSIX 打包的应用安装在 `C:\Program Files\WindowsApps` 文件夹内。

::: tip 提示
使用深色模式视觉效果更佳
:::
