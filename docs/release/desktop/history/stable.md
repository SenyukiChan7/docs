# 更新记录（正式版）

### 0.2.0.1 框架版本升级 <Badge text="正式版" vertical="middle" />

[线路一](https://file.xunkong.cc/download/package/Xunkong.Desktop.Package_0.2.0.1_x64.msixbundle)
[线路二](https://scighost-generic.pkg.coding.net/xunkong/releases/Xunkong.Desktop.Package_0.2.0.1_x64.msixbundle)
2022-06-05 09:38:06

> MD5: F77D65D75F1660D6B9B514AFEEAF1621

微软终于发布了 WindowsAppSDK 1.1，这次升级后可能会有性能提升吧。

### 更新内容

- 新增
  - 应用启动时自动进行米游社签到（需在 **设置 > 米游社签到 > 启动应用时签到** 中开启）
  - 导航栏切换提醒
- 更改
  - WindowsAppSDK 更新至 1.1 版本
  - 其他依赖包的版本更新
- 修复
  - 月初获取旅行札记时出错的问题


## 0.2.0.0 版本号+1 <Badge text="正式版" vertical="middle" />

[线路一](https://file.xunkong.cc/download/package/Xunkong.Desktop.Package_0.2.0.0_x64.msixbundle)
[线路二](https://scighost-generic.pkg.coding.net/xunkong/releases/Xunkong.Desktop.Package_0.2.0.0_x64.msixbundle)
2022-04-19 11:06:02

> MD5: 0BC1058BCA799E90495C106B877EDF1F

盼望着，盼望着，第一个正式版来了！

我对第一个正式版的完成情况很满意，这个版本基本上实现了现阶段我计划中能够写出来的所有功能，剩下的想法涉及到一些完全不了解的领域所以没法动手。

接下来将会对本项目的仓库进行拆分，把各个独立的模块单独成库并纳入新组织 [寻空](https://github.com/xunkong) 中，其中一些通用的库还会发布至 NuGet，感兴趣的朋友可以去关注一下。

还记得设置页面的那句话吗？
**正式版享受长期不更，预览版体验更多 Bug。**
除非有一些重大问题，正式版在很长一段时间内将不会有更新，如果想要跟踪项目的最新进展，需要手动下载最新的预览版（我也不知道下一个预览版会在什么时候发布）。

~~把优化性能的计划给鸽了，因为现在 WinUI3 的性能实在很差，等框架成熟一些了再着手优化吧。~~

### 更新内容

- 修复
  - 部分文本错误
  - 迁移数据库时的错误

