import React,{Component,Fragment} from 'react';
import Input from './UI/Input';


class Family extends Component{
    //check if input has value or not to disable button
    componentDidMount (){
        const inputValue=document.querySelector('input').value;
        if(inputValue && inputValue !== ''){
            document.querySelector(".next").removeAttribute("disabled");

        }
        else{
            document.querySelector(".next").setAttribute('disabled','disabled');
        }
    }
    render(){

        return(
            <Fragment>
                <div className='title'>
                    <h1>Enter Your Name</h1>
                </div>
                <div className="formWrapper">
                    <Input
                        name='family'
                        label='Last Name'
                        inputHandler={this.props.inputHandler}
                        inputValue ={this.props.inputValue}
                    />
                </div>

            </Fragment>
        )
    }

}
export default Family;