import React,{Component} from 'react';
import M from "materialize-css";

class DropDown extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        const {name,inputHandler,selectValue,countries} = this.props
        return (
        <div className="input-field col s12">
            <select name={name}
                    onChange={inputHandler}
                    defaultValue={selectValue}>
                <option value="" disabled >Choose your option</option>
                {countries.map((cont,key)=>{
                    return <option
                        key={key}
                        value={cont}
                    >
                        {cont}
                    </option>
                })
                }
            </select>
            <label>Countery</label>
        </div>
        )
    }
}
export default DropDown;