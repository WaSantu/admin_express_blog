import React, {Component} from "react"
import style from './login.module.css'
import {Form, Input, Button, Switch} from 'antd'
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import * as common_action from '../../store/action/common_action'
import {enter_check, doInitSysset} from '../../data/data'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: true,
            btn_loading: false
        }
    }

    async componentDidMount() {
        console.log(this.props)
        let re = await enter_check()
        if (re.data === '0') {
            this.setState({
                init: true
            })
        }
    }

    handlkSunbmt = async (values) => {
        this.props.actions.toggleLoading(true)
        // this.setState({
        //     btn_loading: true
        // })
        // let params = {
        //     account: values.account,
        //     password: values.password,
        //     nickname: 'jaja',
        //     site_name: values.site_name,
        //     site_des: values.site_des,
        //     site_icon: 1,
        //     site_mail: values.site_mail,
        //     site_mail_key: values.site_mail_key,
        //     comment: values.comment ? 1 : 0
        // }
        // try {
        //     let re = await doInitSysset(values.account)
        //     console.log(re, 'wa')
        // } catch (e) {
        //     console.log('hahahah')
        // }
    }

    render() {
        return (
            <div className={style.login_page}>
                {this.props.common.loading?1:2}
                <Button onClick={this.handlkSunbmt}>321312</Button>
                {
                    this.state.init ?
                        <div className={style.init_contain}>
                            <Form labelCol={{span: 8}}
                                  wrapperCol={{span: 10}}
                                  name="basic"
                                  initialValues={{remember: true}}
                            >
                                <Form.Item
                                    label="登录账号"
                                    name="account"
                                    rules={[{required: true, message: '请输入您的登录账号!'}]}
                                >
                                    <Input placeholder="请输入登录账号"/>
                                </Form.Item>
                                <Form.Item
                                    label="登录密码"
                                    name="password"
                                    rules={[{required: true, message: '请输入您的登录密码!'}]}
                                >
                                    <Input.Password placeholder='请输入登录密码'/>
                                </Form.Item>
                                <Form.Item
                                    label="确认密码"
                                    name="comfirm_password"
                                    dependencies={['password']}
                                    rules={[
                                        {required: true, message: '请再次输入您的登陆密码'},
                                        ({getFieldValue}) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve()
                                                }
                                                return Promise.reject('两次输入的密码不一致')
                                            }
                                        })
                                    ]}
                                >
                                    <Input.Password placeholder='请再次输入登录密码'/>
                                </Form.Item>
                                <Form.Item
                                    label="站点名称"
                                    name="site_name"
                                    rules={[{required: true, message: '请输入网站title!'}]}
                                >
                                    <Input placeholder='请输入网站title'/>
                                </Form.Item>
                                <Form.Item
                                    label="站点介绍"
                                    name="site_des"
                                    rules={[{required: true, message: '请输入网站meta!'}]}
                                >
                                    <Input placeholder='请输入网站meta'/>
                                </Form.Item>
                                <Form.Item
                                    label="邮箱"
                                    name="site_mail"
                                    rules={[{required: true, message: '请输入邮箱!'}, {type: 'email', message: "请输入有效的邮箱"}]}
                                >
                                    <Input placeholder='请输入邮箱'/>
                                </Form.Item>
                                <Form.Item
                                    label="邮箱StmpKey"
                                    name="site_mail_key"
                                    rules={[{required: true, message: '请输入您的邮箱StmpKey!'}]}
                                >
                                    <Input placeholder='请输入邮箱StmpKey'/>
                                </Form.Item>
                                <Form.Item name="comment" label="评论审核" wrapperCol={{span: 1}}>
                                    <Switch/>
                                </Form.Item>
                                <Form.Item style={{justifyContent: 'center'}}>
                                    <Button type="primary" htmlType="submit" block loading={this.props.common.loading}>
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div> :
                        <div>
                            登录
                        </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        common: state.common_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            toggleLoading: bindActionCreators(
                common_action.toggleLoading,
                dispatch
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)