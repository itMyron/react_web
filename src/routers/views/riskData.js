import riskView from "../../components/views/content/riskData/riskView/Index";
import riskViewChar from "../../components/views/content/riskData/riskView/chart/Index";
const router = [{
        component: riskView,
        hash: '/views/riskData/riskView',
        name: '风控关注',
        exact: true,
    },
    {
        component: riskViewChar,
        hash: '/views/riskData/riskView/char',
        name: '风控关注---查看风控',
        exact: false,
    }
]

export default router;