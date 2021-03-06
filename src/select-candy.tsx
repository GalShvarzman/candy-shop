import * as React from 'react';
import './select-candy.css';

interface ISelectCandyProps {
    onSelect(number:string):void,
    message:string,
    errorMsg:string
}

class SelectCandy extends React.PureComponent<ISelectCandyProps>{
    public input:any;
    constructor(props:ISelectCandyProps){
        super(props);
        this.input = React.createRef();

    }

    numberButtonClicked = (event:React.MouseEvent<HTMLTableElement>)=>{
        event.stopPropagation();
        if((event.target as HTMLElement).tagName === "SPAN"){
            this.input.current.value += (event.target as HTMLElement).innerHTML;
        }
    };

    onSubmit = () => {
        this.props.onSelect(this.input.current.value);
        this.input.current.value = "";
    };

    render(){
        return(
            <div className="table-wrapper">
                <table onClick={this.numberButtonClicked} className="select-candy-table">
                    <tbody>
                        <tr>
                            <th colSpan={3}><input ref={this.input} type="number"/></th>
                        </tr>
                        <tr>
                            <td><span>1</span></td>
                            <td><span>2</span></td>
                            <td><span>3</span></td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td><span>5</span></td>
                            <td><span>6</span></td>
                        </tr>
                        <tr>
                            <td><span>7</span></td>
                            <td><span>8</span></td>
                            <td><span>9</span></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><span>0</span></td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <button className="buy-button" onClick={this.onSubmit}>Buy</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <p className="message">{this.props.message || this.props.errorMsg}</p>
            </div>
        )
    }
}

export default SelectCandy;