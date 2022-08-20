# 开始使用

> 如果尚未安装，请前往 [下载页面](../../download/xunkong.md) 。
> 
> 如果没找到帮助文档中的功能，请 [更新至最新版本](ms-windows-store://pdp/?productid=9N2SVG0JMT12) 。

寻空仅支持 Windows 10 1809 及以上版本（最低版本出自微软文档，可靠性未知），建议升级到最新版以避免可能出现的各种问题。

## 准备

首次启动应用会出现欢迎页面，您需要关注以下内容：

### WebView2

寻空使用 [WebView2](https://docs.microsoft.com/microsoft-edge/webview2/) 丰富应用功能，您需要安装 [WebView2 Runtime](https://go.microsoft.com/fwlink/p/?LinkId=2124703)。

> Windows 11 自带 WebView2 Runtime，无需重新安装。

如果已安装 WebView2 Runtime，但寻空内仍提示未安装，请尝试使用管理员权限打开 WebView2 安装程序，或下载并安装任意 [Microsoft Edge 预览版本](https://www.microsoftedgeinsider.com/download) 。

### 图标

寻空使用了 Windows 11 系统上的图标字体，在 Windows 10 系统上可能会出现乱码问题。（不是我想用，是只能用这个）  
使用 Windows 10 的用户需要下载并安装该字体 [Segoe Fluent Icons](https://file.xunkong.cc/download/font/Segoe%20Fluent%20Icons.ttf)。

## 其他

### 数据文件夹

使用寻空的过程中产生的文件存放于 `我的文档\Xunkong` 文件夹中，您的个人数据保存在 `我的文档\Xunkong\Database\XunkongData.db` 文件中（这是一个 SQLite 数据库）。

### 显示内容超出窗口范围

您在使用的过程中可能会遇见页面内容超出窗口大小的问题，请**点击左上角的个人头像**增加可显示页面的范围。

应用的页面设计均按照 `3840×2160分辨率 150%界面缩放 100%字体缩放` 为标准，在同样的显示条件下有最好的体验。  
设计完成后也会在 `1920×1080分辨率 125%界面缩放 100%字体缩放` 的条件下测试，确保能完整显示所有内容。

### 隐私策略

寻空充分尊重您的隐私，在进行网络通信时，会向服务器发送您的IP和匿名设备ID，除此之外，未经您同意的情况下，不会上传您的其他个人信息。

::: tip 注意
应用内点击隐私策略按键后跳转的页面仅适用于上架商店的合规要求，真实的隐私策略只有上方这一条。
:::
