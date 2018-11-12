
import LoanApply from "../../components/views/content/loanManage/loanApply/Index";
import LoanApply_details from "../../components/views/content/loanManage/loanApply/details/Index";
import LoanApply_details_risk from "../../components/views/content/loanManage/loanApply/details/riskReport/Index";
import LoanApply_history from "../../components/views/content/loanManage/loanApply/history/Index";

import FirstTrial from "../../components/views/content/loanManage/firstTrial/Index";
import Recheck from "../../components/views/content/loanManage/recheck/Index";
import Pass from "../../components/views/content/loanManage/pass/Index";
import PendingFee from "../../components/views/content/loanManage/pendingFee/Index";
import LoanList from "../../components/views/content/loanManage/loanList/Index";
import FundLoan from "../../components/views/content/loanManage/fundLoan/Index";

const router = [
        {
                component: LoanApply,
                hash: '/views/loanManage/loanApply',
                name: '贷前申请',
                exact: true ,
        },
        {
                component: LoanApply_details,
                hash: '/views/loanManage/loanApply/details',
                name: '贷前申请_详情',
                exact: true,
        },
        {
                component: LoanApply_details_risk,
                hash: '/views/loanManage/loanApply/details/risk',
                name: '贷前申请_详情_风控报告',
                exact: false,
        },
        {
                component: LoanApply_history,
                hash: '/views/loanManage/loanApply/history',
                name: '贷前申请_历史记录' ,
                exact: false,
        },
        {
                component: FirstTrial,
                hash: '/views/loanManage/firstTrial',
                name: '初审'
        },
        {
                component: Recheck,
                hash: '/views/loanManage/recheck',
                name: '复审'
        },
        {
                component: Pass,
                hash: '/views/loanManage/pass',
                name: '审核通过'
        },
        {
                component: PendingFee,
                hash: '/views/loanManage/pendingFee',
                name: '居间费待付'
        },
        {
                component: LoanList,
                hash: '/views/loanManage/loanList',
                name: '放款列表'
        },
        {
                component: FundLoan,
                hash: '/views/loanManage/fundLoan',
                name: '资金方贷款'
        }
]

export default router ;