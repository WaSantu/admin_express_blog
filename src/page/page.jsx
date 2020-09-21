import React,{Component} from 'react'
import style from './page.module.css'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./login/login"
import LayoutContainer from "./admin/layout"

export default  class PageContainer extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            login:false,
            loading:true
        }
    }
    async componentDidMount() {
        if(window.localStorage['tt_ss_k']){
            this.setState({
                login:true,
                loading:false
            })
        }else{
            this.setState({
                login:false,
                loading:false
            })
        }
    }
    loading(){
        return (
            <div className={style.loading}>

            </div>
        )
    }
    render() {
        if(this.state.loading){
            return (
                <div>
                    {this.loading()}
                </div>
            )
        }else{
            return (
                <div className={style.enter_page}>
                    <Switch>
                        <Route path='/'>
                            {this.state.login?<Redirect to="/admin" />:<Redirect to='login' />}
                            <Route path='/login' component={Login}></Route>
                            <Route path='/admin' component={LayoutContainer}></Route>
                        </Route>
                    </Switch>
                </div>
            )
        }
    }
}