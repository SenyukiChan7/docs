# 开发

> 现已从桌面主项目中拆出 4 个独立库，并已发布至 NuGet。

## Xunkong.Core

几乎其他所有库都需要它。

## Xunkong.GenshinData

原神数据的数据结构定义，和项目强相关，不具有通用性。

## Xunkong.ApiClient

寻空后端 API 的调用库，和项目强相关，不具有通用性。

## Xunkong.Hoyolab

米游社原神部分 API，这个可以通用。

```
dotnet add package Xunkong.Hoyolab
// 一般引用上面这个，如果项目使用 NativeAOT 发布，则引用下面这个
dotnet add package Xunkong.Hoyolab.NativeAOT
```

### 米游社

``` cs
using Xunkong.Hoyolab;

var cookie = "your cookie";
var client = new HoyolabClient();
// 米游社账号
var user = await client.GetHoyolabUserInfoAsync(cookie);
// 原神账号
var roles = await client.GetGenshinRoleInfosAsync(cookie);
var role = roles[0];
// 签到信息
var signInfo = await client.GetSignInInfoAsync(role);
// 开始签到
var isSigned = await client.SignInAsync(role);
// 战绩
var summary = await client.GetGameRecordSummaryAsync(role);
// 角色
var details = await client.GetAvatarDetailsAsync(role);
// 角色技能
var skills = await client.GetAvatarSkillLevelAsync(role, details.First().Id);
// 活动
var act = await client.GetActivitiesAsync(role);
// 便笺
var dailynote = await client.GetDailyNoteAsync(role);
// 札记
var travelNotesSummary = await client.GetTravelNotesSummaryAsync(role);
// 深渊
var spirall = await client.GetSpiralAbyssInfoAsync(role, 1);
// 新闻列表
var newsList = await client.GetNewsListAsync(Xunkong.Hoyolab.News.NewsType.Announce);
// 新闻内容
var newsDetail = await client.GetNewsDetailAsync(newsList.First().PostId);

```

### 抽卡记录

``` cs
using Xunkong.Hoyolab.Wishlog;

var url = await WishlogClient.GetWishlogUrlFromLogFileAsync();
var client = new WishlogClient();
var uid = await client.GetUidAsync(url);
var wishlogs = await client.GetAllWishlogAsync(url, lastId: 0);
```

