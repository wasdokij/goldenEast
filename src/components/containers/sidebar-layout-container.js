import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import styles from '../../app.less';
import { Link } from 'react-router';
import { sidebarCollapse } from '../../actions/app-interaction-actions';
import imgSrc from '../../appConstants/assets/images/logo_white.png';
import { Menu, Icon } from 'antd';
import { routeBase } from '../../appConstants/urlConfig';
const SubMenu = Menu.SubMenu;

const SidebarLayoutContainer = React.createClass({

      onCollapseChange() {
          store.dispatch(sidebarCollapse());
      },

    render() {
        const collapse = this.props.collapse;
        const sidebarWrapperName = collapse ? 'sidebarWrapperCollapse' : 'sidebarWrapper';
        const mode = collapse ? 'vertical' : 'inline';
        const pathName = window.location.pathname;
        return (
                <div className={styles[sidebarWrapperName]} style={{transition: 'all 0.3s ease'}}>
                    <div className={styles.logo}>
                        <Link to={routeBase}>
                            <img src={imgSrc} alt="logo"/>
                        </Link>
                    </div>

                    <Menu mode={mode}
                      defaultSelectedKeys={[pathName]} defaultOpenKeys={['sub1']}>
                      <SubMenu key="sub1" title={<span><Icon type="home" /><span className={styles.navText}>一级菜单</span></span>}>
                        <Menu.Item key={routeBase + 'example_1'}>
                            <Link to={routeBase + 'example_1'}>
                                二级菜单1
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'example_2'}>
                            <Link to={routeBase + 'example_2'}>
                                二级菜单2
                            </Link>
                        </Menu.Item>
                      </SubMenu>
                    </Menu>

                    <div className={styles.antAsideAction} onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                </div>
            )

    }
});

function mapStateToProps(store) {
    return {
        collapse : store.appInteractionState.sidebarCollapse
    }
}

export default connect(mapStateToProps)(SidebarLayoutContainer);