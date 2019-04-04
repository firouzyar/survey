import React,{Component} from 'react';
import {Rout,Router} from 'react-router-dom';
import Home from '../Components/Home';

class Routes extends Component{
    render(){
        return(
                <Router>
                        <Rout path='/' exact component={Home}/>

                </Router>


        )
    }
}
export default Routes;