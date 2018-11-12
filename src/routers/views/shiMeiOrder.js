
import InvoiceManage from "../../components/views/content/shiMeiOrder/invoiceManage/Index";
import SaaSOrder from "../../components/views/content/shiMeiOrder/SaaSOrder/Index";
import SaaSShop from "../../components/views/content/shiMeiOrder/SaaSShop/Index";
const router = [
    {
        component: InvoiceManage,
        hash: '/views/shiMeiOrder/invoiceManage',
        name: '发票管理',
        exact: false,
    },
    {
        component: SaaSOrder,
        hash: '/views/shiMeiOrder/SaaSOrder',
        name: 'SaaS订单',
        exact: false,
    },
    {
        component: SaaSShop,
        hash: '/views/shiMeiOrder/SaaSShop',
        name: 'SaaS店铺',
        exact: false,
    }

]

export default router;