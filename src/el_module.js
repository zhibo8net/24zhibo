// 导入自己需要的组件
import Vue from 'vue'
import {
  Message,
  Carousel,
  CarouselItem,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Row,
  Col
} from 'element-ui'
const element = {
  install: function (Vue) {
    // Vue.use(Message)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Row)
    Vue.use(Col)
  }
}
Vue.prototype.$message = Message;
export default element
