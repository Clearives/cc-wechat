### 小程序开发细节问题

##### textarea问题
- bindblur需要第二次才会生效，第一次执行数据还是之前的。
```js
descInput: function (e) {
    this.setData({
      desc: e.detail.value
    })
}
```
- textarea的z-index不生效,当需要输入多行文字时，微信小程序提供了textarea组件可以使用，但我发现存在一个问题。z-index会失去作用。textarea输入的内容会浸透在遮盖在textarea上的布局

> 解决办法：为了解决原生组件层级最高的限制。小程序专门提供了 cover-view 和 cover-image 组件，可以覆盖在部分原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

##### 小程序z-index问题

- 层级覆盖问题
> 解决办法：必须两个元素都设置z-index才能生效



##### 滚动刷新

- 页面不足一屏是触发不了上拉加载
> 根据滚动区域计算出来能放多少个元素，然后加一，注意px,rpx的转换

##### 局部刷新数据

- 局部刷新数据，记录当前元素，然后setData当前项
```js
let orderIndex = _that.data.orderIndex
_tempTuanOrderList[orderIndex].orderStatus = 4
_tempTuanOrderList[orderIndex].orderProductList.forEach(function (v, i) {
  v.productStatus = 1
})
_that.setData({
  ["tuanOrderList["+ orderIndex + "]"]: _tempTuanOrderList[orderIndex]
})
```

##### 微信小程序使用e.target.dataset的小bug
- 在微信开发中我们经常会用到标签中属性的属性值，有时候我们通过data-*和 e.target.dataset来获取属性值会出现一点小bug，即是调用出来的数据是undefined，即取不到值。 

> 解决办法：在data后面的属性名是不能按照驼峰式的写法，只要把定义的属性名全部换成小写就没有问题了

##### 小程序正则使用
```$js
var formatText = function (str) {
    var reg = getRegExp(" ", "g");
    return str.replace(reg, '&nbsp;');
}
module.exports = { formatText: formatText};
```
> 新建wxs文件，然后在wxml里面引入,使用js函数即可正则转换字符串

###### 小程序canvas文字居中设置
-  this.ctx.fillText(fillText, left, fillTop); left是以文本的中间位置定位的。
  所以只需要将屏幕宽度除2放在x位置就可以了,也就是left设置为总宽度除以2,textAlign设为center即可。
  
```$js
{
  "type": "text",
  "content": "果粒奶优不好喝",
  "fontSize": 12,
  "color": "#f8f8f8",
  "textAlign": "center",
  "top": 570,
  "left": 375/2,
  "width": 375,
}
```

###### 小程序canvas生成图片模糊
> 因为绘制的坐标不是整数级的坐标，所以会变得模糊，所以在计算坐标的时候可以使用 Math.floor 将坐标取整，这样绘制就会变得清晰

###### 小程序canvas画文字换行
> 中英文字符宽度不一样，所以不能通过截取字符串数字来处理，必须判断字符所占实际宽度来换行。
```js
this.ctx.measureText(fillText).width > width
```

##### 小程序登录

![](http://pc1g4qy0i.bkt.clouddn.com//upload/wxlogin.png)

##### wepy

- 组件嵌套组件，数据传递问题

- 组件slot，里面嵌套组件时，传值报错
> 解决办法：嵌套组件外面包一层<block></block>
```html
<Panel title='UI组件库' :hideBorder.sync='hideBorder' :hideTop.sync='hideTop'>
  <block>
    <CellList :list.sync='list' />
  </block>
</Panel>
```
- 子组件监听父组件操作
> 1、可使用$broadcast传递事件函数
> 2、可以通过watch监听props改变
```js
watch = {
  myGroupList (newValue, oldValue) {
    console.log(`value length: ${oldValue.length} -> ${newValue.length}`)
  }
}

// -----------------------
this.$broadcast('changeCurrentTab', i)

events = {
  changeCurrentTab: function (i) {
    console.log(`$broadcast value: ${i}`)
  }
}
```
