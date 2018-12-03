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
