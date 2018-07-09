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
                    <div>{candy.candyName}</div>
                    <div>price : {candy.price}$</div>
                    <div>{idx+1}</div>
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
