
import React,{Component} from 'react';
import M from "materialize-css";

class InputText extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        M.updateTextFields();
    }
    render(){
        const {inputHandler,inputValue,name,label} = this.props
        return(
            <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input className='textInput'
                       onChange={inputHandler}
                       type='text'
                       name={name}
                       value={inputValue}
                       id="icon_prefix"
                />
                <label htmlFor="icon_prefix">{label}</label>
            </div>
        )
    }
}
export default InputText;