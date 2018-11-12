import USER from "../../components/views/content/systemManage/user/Index";
import UserDetail from "../../components/views/content/systemManage/user/detail/Index";
import DEPT from "../../components/views/content/systemManage/dept/Index";
import DeptDetail from "../../components/views/content/systemManage/dept/detail/Index";
import ROLE from "../../components/views/content/systemManage/role/Index";
import MenuManager from "../../components/views/content/systemManage/menu/Index";
import LogManager from "../../components/views/content/systemManage/log/Index";


const router = [{
                component: USER,
                hash: '/views/sys/user',
                name: '用户管理',
                exact: true,
        },
        {
                component: UserDetail,
                hash: '/views/sys/user/detail',
                name: '用户详情',
                exact: true,
        },
        {
                component: DEPT,
                hash: '/views/sys/dept',
                name: '部门管理',
                exact: true,
        },
        {
                component: DeptDetail,
                hash: '/views/sys/dept/detail',
                name: '部门详情',
                exact: true,
        },
        {
                component: ROLE,
                hash: '/views/sys/role',
                name: '角色管理',
                exact: true,
        },
        {
                component: MenuManager,
                hash: '/views/sys/menu',
                name: '菜单管理',
                exact: true,
        },
        {
                component: LogManager,
                hash: '/views/sys/log',
                name: '日志管理',
                exact: true,
        }
]

export default router;