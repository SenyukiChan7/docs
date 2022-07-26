# 迁移数据库

::: warning 提醒
使用过寻空**任意 0.x 版本**的用户需要迁移数据库，其他用户不需要此操作。
:::

寻空 0.x 版本的个人数据存放于 `我的文档/Xunkong/Data/XunkongData.db` 文件，而 1.x 版本更新了数据库结构，文件也移至 `我的文档/Xunkong/Database/XunkongData.db`。

为了减少应用启动时的判断流程，需要您自行迁移数据库。

## 迁移流程

- [下载迁移工具](https://file.xunkong.cc/download/tool/DatabaseMigration.zip)并解压
- 确保文件 `我的文档/Xunkong/Database/XunkongData.db` 不存在
- 运行 `DatabaseMigration.exe`，等待迁移完成

> 迁移工具压缩包内有一个txt文件，里面确实没有任何内容。