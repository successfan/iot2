export default class Msg{
    constructor(view) {
        this.view = view;
        this.list = [];
        this.ws_url = '';
    }

    // 创建ws
    // 设置ws监听多个方法
    
    // 增加消息机制模块
    addModle(model)
    {
        this.list.push(model)
    }

    // 启动轮休机制
    rev(obj)
    {
        this.list.forEach((item,i) => {
          if(item)
          {
              if(item.C100)
              {
                item.C100(obj);
              }
          } else{
            this.list.splice(i,1);
          }
      });
    }

    C100() {
        console.log('Class01--')
    }
}