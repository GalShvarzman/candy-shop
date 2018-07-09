import * as React from 'react';
import './select-candy.css';

interface ISelectCandyProps {

}

class SelectCandy extends React.PureComponent<ISelectCandyProps>{
    constructor(props:ISelectCandyProps){
        super(props)
    }

    render(){
        return(
            <div>
                <table className="select-candy-table">
                    <tbody>
                        <tr>
                            <th colSpan={3}><input type="text"/></th>
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
                                <button>Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default SelectCandy;