import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectCandy from "./select-candy";
import Candies from "./candies";

interface IAppProps {
    candies:any[],
    onSelect(name:string):void
}

class App extends React.PureComponent <IAppProps, {}>{
  constructor(props:IAppProps){
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <div>
            <SelectCandy/>
            <Candies/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        candies: state.candies,
    }
};

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        onSelect: (name:string) => {
            //dispatch(addAction(name))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


