import * as React from 'react';
import './candies.css';

interface ICandiesProps {
    candies:any[]
}

class Candies extends React.PureComponent<ICandiesProps>{
    constructor(props:ICandiesProps){
        super(props)
    }

    render(){
        const list = this.props.candies.map((candy, idx)=>{
            return (
                <div className="candy" key={idx}>
                    <div className="select-number">{idx+1}</div>
                    <div>{candy.candyName}</div>
                    <div>Price : {candy.price}$</div>
                    <div className={candy.countInStock === 0 ? "out-of-stock" : ""}>In stock : {candy.countInStock}</div>
                </div>
            )
        });

        return(
            <div className="candy-wrapper">
                {list}
            </div>
        )
    }
}

export default Candies;
