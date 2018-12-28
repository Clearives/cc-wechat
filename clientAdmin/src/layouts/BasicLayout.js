import {connect} from 'dva'
import {Layout} from 'antd'
import pathToRegexp from 'path-to-regexp';
import Authorized from '@/utils/Authorized';
import SiderMenu from '../components/SiderMenu'
import Exception403 from '../pages/Exception/403'
import styles from './index.less';

const {Content} = Layout;

@connect(({menu}) => ({
  menuData: menu.menuData,
  breadcrumbNameMap: menu.breadcrumbNameMap,
}))
class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      dispatch,
      route: {routes, authority},
    } = this.props
    dispatch({
      type: 'menu/getMenuData',
      payload: {routes, authority},
    })
  }

  getRouterAuthority = (pathname, routeData) => {
    let routeAuthority = ['noAuthority'];
    const getAuthority = (key, routes) => {
      routes.map(route => {
        if (route.path && pathToRegexp(route.path).test(key)) {
          routeAuthority = route.authority;
        } else if (route.routes) {
          routeAuthority = getAuthority(key, route.routes);
        }
        return route;
      });
      return routeAuthority;
    };
    return getAuthority(pathname, routeData);
  }

  render() {
    let props = this.props
    let logo = 'https://static2.zyxr.com/a1dcb7ad949544d1a30634bbdc036be2.jpg'
    let navTheme = 'light'
    let menuData = props.menuData
    let isMobile = false
    let pathname = props.location.pathname
    let routes = props.route.routes
    const routerConfig = this.getRouterAuthority(pathname, routes)
    return (
      <Layout>
        <SiderMenu
          logo={logo}
          theme={navTheme}
          onCollapse={this.handleMenuCollapse}
          menuData={menuData}
          isMobile={isMobile}
          {...this.props}
        />
        <Layout>
          <div className={styles.header}>Header</div>
          <Content className={styles.content}>
            <Authorized authority={routerConfig} noMatch={<Exception403/>}>
              {props.children}
            </Authorized>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
