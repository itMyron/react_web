
import RepayPlan from "../../components/views/content/loanAfterManage/repayPlan/Index";

import loanAfterManageDetails from "../../components/views/content/loanAfterManage/details/Index";
import RepayPlan_plan from "../../components/views/content/loanAfterManage/repayPlan/plan/Index";
import RepayPlan_planHH from "../../components/views/content/loanAfterManage/repayPlan/planHH/Index";
import OverdueList from "../../components/views/content/loanAfterManage/overdueList/Index";

const router = [
        {
                component: RepayPlan,
                hash: '/views/loanAfterManage/repayPlan',
                name: '流水贷还款计划',
                exact: true ,
        },
        {
                component: RepayPlan_plan,
                hash: '/views/loanAfterManage/repayPlan/plan',
                name: '流水贷还款计划_还款计划',
                exact: false ,
        },
        {
                component: RepayPlan_planHH,
                hash: '/views/loanAfterManage/repayPlan/planHH',
                name: '流水贷还款计划_还款计划(瀚华)',
                exact: false,
        },
         {
                component: loanAfterManageDetails,
                hash: '/views/loanAfterManage/details',
                name: '流水贷还款计划_还款详情',
                exact: false,
        },
        {
                component: OverdueList,
                hash: '/views/loanAfterManage/overdueList',
                name: '初审',
                exact: false,
        },
        
]

export default router ;