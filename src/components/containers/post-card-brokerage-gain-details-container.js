import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/board-market-brokerage-gain-details-table';
import { connect } from 'react-redux';
import store from '../../store';
import { updatePostCardBrokerageUserDetailSearch } from '../../actions/app-interaction-actions';
import { getPostCardUserDetailData } from '../../api/app-interaction-api';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

const RangePicker = DatePicker.RangePicker;

var BoardMarketBrokerageGainDetailsContainer = React.createClass({
    getInitialState(){
        return {
            user_sn: '',
            userInfo: '',
            accounts: []
        }
    },
    jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
    },
    componentWillMount(){
        const user_sn = this.props.params.details3;
        this.setState({
            user_sn: user_sn
        })
    },
    componentDidMount() {
        var _this = this;
    	const user_sn = this.state.user_sn;
        getPostCardUserDetailData({sn:user_sn},function(info){
    		console.log(info)
    		_this.setState({
    			userInfo: info.data,
    			accounts: info.data.accounts
    		});
    	},function(info){
    		console.log('fail',info)});
    },
    submitSearch() {
        getPostCardUserDetailData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updatePostCardBrokerageUserDetailSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },
    
	render(){
         const jinLevels = this.jinLevels();
        const { data } = this.props.dataState;
        let avatar,avatarYes,user_name,level;
        try {
            user_name= data.user.user_name;
            avatar = !data.user.wechat_avatar ? data.user.user_name.slice(0,1): '';
            avatarYes = data.user.wechat_avatar;
            level = data.user.level;
        } catch(err) {}
		return (
			<div>
                <div className="userListHeader q-brokerage-user border-b">
                    <div className="q-brokerage-user">
                        <div className="q-brokerage-avatar margin-r-10">
                            <span style={{backgroundImage:'url('+avatarYes+')'}}>{avatar}</span>
                        </div>
                        <div className="">
                            <div className="margin-b-5">{user_name}</div>
                            <p className=""> <img src={jinLevels[level]} alt="jinLevel"/></p>
                        </div>
                    </div>
				</div>
				<div className="data-picker-bar">
					<label>交易日期:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data}  />
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.microBoardBrokerageUserDetailState.dataState,
        searchState : store.microBoardBrokerageUserDetailState.searchState
    }
};

export default connect(mapStateToProps)(BoardMarketBrokerageGainDetailsContainer);
