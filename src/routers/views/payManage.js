
import BankCardsList from "../../components/views/content/payManage/bankCardsList/Index";

import OrderPay from "../../components/views/content/payManage/orderPay/Index";
import Fee from "../../components/views/content/payManage/fee/Index";
import PayBusiness from "../../components/views/content/payManage/payBusiness/Index";
//import OverdueList from "../../components/views/content/loanAfterManage/overdueList/Index";
//import OverdueList_details from "../../components/views/content/loanAfterManage/overdueList/details/Index";
const router = [
        {
                component: BankCardsList,
                hash: '/views/payManage/bankCardsList',
                name: '银行卡列表',
                exact: false ,
        },
        {
                component: OrderPay,
                hash: '/views/payManage/orderPay',
                name: '订单支付',
                exact: false ,
        },
         {
                component: Fee,
                 hash: '/views/payManage/fee',
                 name: '居间服务费',
                exact: false,
        },
        {
                component: PayBusiness,
                hash: '/views/payManage/payBusiness',
                name: '初审',
                exact: false,
        },
         /*{
                component: OverdueList_details,
                hash: '/views/loanAfterManage/overdueList/details',
                name: '预期还款列表_还款详情',
                exact: false,
        }, */
]

export default router ;