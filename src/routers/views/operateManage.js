
import VisitRecord from "../../components/views/content/operateManage/visitRecord/Index";
import OperateManage_details from "../../components/views/content/operateManage/details/Index";
import RegisterUser from "../../components/views/content/operateManage/registerUser/Index";
import AssureChannel from "../../components/views/content/operateManage/assureChannel/Index";
import FundChannel from "../../components/views/content/operateManage/fundChannel/Index";
import ProductChannel from "../../components/views/content/operateManage/productChannel/Index";
import LoanUser from "../../components/views/content/operateManage/loanUser/Index";
import SaaSChannel from "../../components/views/content/operateManage/SaaSChannel/Index";
const router = [
        {
                component: VisitRecord,
                hash: '/views/operateManage/visitRecord',
                name: '访问记录',
                exact: true ,
        } ,
        {
                component: OperateManage_details,
                hash: '/views/operateManage/details',
                name: '运营管理_详情',
                exact: false ,
        },
         {
                 component: RegisterUser,
                 hash: '/views/operateManage/registerUser',
                 name: '注册用户',
                exact: true,
        },
        {
                component: AssureChannel,
                hash: '/views/operateManage/assureChannel',
                name: '担保渠道',
                exact: false,
        }, 
        {
                component: FundChannel,
                hash: '/views/operateManage/fundChannel',
                name: '资金渠道',
                exact: false,
        },
        {
                component: ProductChannel,
                hash: '/views/operateManage/productChannel',
                name: '产品渠道',
                exact: false,
        },
        {
                component: LoanUser,
                hash: '/views/operateManage/loanUser',
                name: '贷款用户',
                exact: false,
        },
        {
                component: SaaSChannel,
                hash: '/views/operateManage/SaaSChannel',
                name: 'SAAS渠道',
                exact: false,
        }


]

export default router ;