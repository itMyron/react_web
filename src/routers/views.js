import React from "react";
import {Route} from "react-router-dom";
import Home from './views/home';
import loanManage from './views/loanManage';
import loanAfterManage from "./views/loanAfterManage";
import payManage from "./views/payManage";
import operateManage from "./views/operateManage";
import system from "./views/systemManage";
import loanCount from "./views/loanCount";
import shiMeiOrder from "./views/shiMeiOrder";
import riskData from "./views/riskData";
const routers = [...Home, ...loanManage, ...loanAfterManage, ...payManage, ...operateManage, ...system, ...loanCount, ...shiMeiOrder, ...riskData];

let pages =(
    < div className = "contain" >
            {
            routers.map((page, index) => <Route exact={page.exact} path={page.hash} component={page.component} key={index} />)
            }

    </div >
)

export default pages;
