import React,{Component} from 'react';
import M from "materialize-css";

class Radio extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();

    }
    render(){
        const {inputHandler,name,inputVale,type} = this.props
        return (
        <div className="radioWrapper">
            {
                type.map((item,key) => {
                    return(
                        <span key={key}>

                            <label>
                                <input className="with-gap"
                                       name={name}
                                       onChange={inputHandler}
                                       type="radio"
                                       value={item}
                                       checked={item === inputVale?true:false}/>
                                <span>{item}</span>
                            </label>
                        </span>
                    )
                })
            }
        </div>
        )
    }

}
export default Radio;