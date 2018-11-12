import ENV from "../config";
const { REACT_APP_SECRET_API = process.env.NODE_ENV } = process.env;
let option = { };
ENV.map(NODE => {
    if (NODE.ENV === 'development'){
        option[NODE.ENV] = {
            host: process.env.REACT_APP_RECORDS_API_URL || NODE.API_ROOT
        }
    }else{
        option[NODE.ENV] = {
            host: NODE.API_ROOT || ''
        }
    }
    return option ;
})



const config = Object.assign({}, option[REACT_APP_SECRET_API], {
  REACT_APP_SECRET_API: REACT_APP_SECRET_API
});

export default config.host