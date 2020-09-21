import request from "../method/requet"

const enter_check = () => request('/sys/check')
const doInitSysset = (account, password, nickname, site_name, site_des, site_icon, send_mail, send_mail_key, comment) => request('/sys/init',{
    account, password, nickname, site_name, site_des, site_icon, send_mail, send_mail_key, comment
})



export {
    enter_check,
    doInitSysset
}