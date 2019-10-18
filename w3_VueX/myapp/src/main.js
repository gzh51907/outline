import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import store from './store';

// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 手动按需引入
// import {Button} from 'element-ui/lib/button'
// import 'element-ui/lib/theme-chalk/button.css'
// Vue.use(Button)

// 利用babel-plugin-component工具实现按需引入
import {
  Menu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Container,
  Header,
  Main,
  Footer,
  Image,

} from 'element-ui';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Image);

import axios from 'axios';
const laoxie = axios.create({
  baseURL: 'http://localhost:3000'
});
Vue.prototype.$axios = axios;
Vue.prototype.$laoxie = laoxie;


new Vue({
  // 4.把router实例注入到vue实例中
  router,

  // 4. 把store注入到Vue实例中
  store,
  render: h => h(App),
}).$mount('#app')


