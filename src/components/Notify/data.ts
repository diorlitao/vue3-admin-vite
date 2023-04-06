export interface IListItem {
  avatar?: string
  title: string
  datetime?: string
  description?: string
  status?: "" | "success" | "info" | "warning" | "danger"
  extra?: string
}

export const notifyData: IListItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: "Vue3 Admin Vite 上线啦",
    datetime: "半年前",
    description:
      "一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: "Vue3 Admin 上线啦",
    datetime: "9个月前",
    description: "一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"
  }
]

export const messageData: IListItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "来自发布中心",
    description: "代码新版本发布成功，请查收",
    datetime: "2023-03-05"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "来自王小二",
    description: "向您发送了代码测试结果",
    datetime: "2023-02-04"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "来自代码仓库",
    description: "代码构建失败，请及时处理",
    datetime: "2023-02-01"
  }
]

export const todoData: IListItem[] = [
  {
    title: "任务名称",
    description: "最新版本的代码发包任务",
    extra: "未开始",
    status: "info"
  },
  {
    title: "任务名称",
    description: "分支需求代码合并的冲突处理",
    extra: "进行中",
    status: "warning"
  },
  {
    title: "任务名称",
    description: "代码无用需求分支b的删除工作",
    extra: "已超时",
    status: "danger"
  },
  {
    title: "任务名称",
    description: "代码小组评审会",
    extra: "已结束",
    status: "info"
  }
]
