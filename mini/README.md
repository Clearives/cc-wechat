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
