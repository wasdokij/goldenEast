import { combineReducers } from 'redux';

// Reducers
import adminReducer from './admin-reducer';
import appInteractionReducer from './app-interaction-reducer';
import chuanShangBoardMarketReducer from './chuanShang-board-market-reducer';
import agentOverviewDataReducer from './agent-overview-data-reducer';
import shenWenSuoBoardMarketReducer from './shenWenSuo-board-market-reducer';
import chuanShangPostCardReducer from './chuanShang-post-card-reducer';
import jiShangPostCardReducer from './jiShang-post-card-reducer';
import shenWenSuoMicroBoardReducer from './shenWensuo-micro-board-reducer';
import jiShangMicroBoardReducer from './jiShang-micro-board-reducer';
import yueGuoJiMicroBoardReducer from './yueGuoJi-micro-board-reducer';
import infoAssetAllotListReducer from './info-asset-allot-list-reducer';
import gainInfoAssetAllotListReducer from './gain-info-asset-allot-list-reducer';
import particularsBtnReducer from './particulars-btn-reducer';

const reducers = combineReducers({
    adminState : adminReducer,
    appInteractionState : appInteractionReducer,
    chuanShangBoardMarketState : chuanShangBoardMarketReducer,
    agentOverviewDataState : agentOverviewDataReducer,
    shenWenSuoBoardMarketState : shenWenSuoBoardMarketReducer,
    jiShangPostCardState: jiShangPostCardReducer,
    chuanShangPostCardState: chuanShangPostCardReducer,
    shenWenSuoMicroBoardState : shenWenSuoMicroBoardReducer,
    jiShangMicroBoardState : jiShangMicroBoardReducer,
    yueGuoJiMicroBoardState : yueGuoJiMicroBoardReducer,
    infoAssetAllotListState : infoAssetAllotListReducer,
    gainInfoAssetAllotListState : gainInfoAssetAllotListReducer,
    particularsBtnState : particularsBtnReducer,
});

export default reducers;