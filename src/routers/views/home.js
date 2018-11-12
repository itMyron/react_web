
import home from '../../components/views/content/home/Home';
import test from '../../components/views/content/test/Index';

const router = [
    {
        component: home ,
        hash:'/views/home' ,
        name:'首页',
        meta: {
            title: "杭州鑫火信息科技有限公司",
            isFooter: false
        }
    },
    {
        component: test,
        hash: '/views/test' ,
        name:'测试' ,
        meta: {
            title: "测试",
            isFooter: false
        }
    }
]


export default router ;