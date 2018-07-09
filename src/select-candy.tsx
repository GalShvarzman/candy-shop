import * as React from 'react';
import './select-candy.css';

interface ISelectCandyProps {
    onSelect(number:string):void
}



class SelectCandy extends React.PureComponent<ISelectCandyProps>{
    public input:any;
    constructor(props:ISelectCandyProps){
        super(props);
        this.input = React.createRef();

    }

    onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        this.props.onSelect(this.input.current.value);
    };

    render(){
        return(
            <div>
                <table className="select-candy-table">
                    <tbody>
                        <tr>
                            <th colSpan={3}><input ref={this.input} type="text"/></th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <button onClick={this.onClick}>Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default SelectCandy;