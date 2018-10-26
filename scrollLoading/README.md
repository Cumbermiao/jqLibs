

# scrollLoading
> scrollLoading 在指定元素滚动到某个位置的时候，会执行 loadEvent，从而实现滚动加载。注意要绑定的元素要定高，或者设为 document。依赖jquery。
# 参数 
- distance: 触发 loadEvent 时距离文档底部的距离。
- loadEvent： 滚动到制定位置时要执行的回调。该回调执行之后，如果需要继续滚动加载，则需要函数最后返回true，当回调没有返回或者返回false的时候，再次满足distance 时不会再执行loadEvent。（页面初始加载时，会首先判断符不符合 distance 条件，如果符合会触发 loadEvent）。
- stopMore ：是否停止滚动加载，如果要停止滚动加载，需要在 loadEvent 中设置 this.more 为true，ajax的event中要注意this指向。
> 如果要实现滚动加载，要在loadEvent 中请求数据，根据数据自己手动渲染。
# 方法
- init：初始化scrollLoading
- off：unbind 挂载元素的滚动事件
- checkMore：检查距离底部距离是否小于 distance，如果小于则执行loadEvent
- scrollHandle：挂载元素滚动绑定的函数
> 如果自己改写 checkMore或scrollHandle ，需要自己判断挂载元素滚动距离底部的距离和distance。
# 实例
```
var pageNum = 1;
$(document).scrollLoading({
    distance:100,
    loadEvent:function(){
        var str=""
        for(var i =0;i<5;i++){
            str =str+'<div class="list-item">jquery.scrollLoading 滚动加载第'+pageNum+'页</div>'
        }
        $('.list').append(str)
        pageNum++
        if(pageNum>5){
            this.stopMore = true
            return
        }
        this.stopMore = false
        
    }
})
```
