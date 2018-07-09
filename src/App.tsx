import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectCandy from "./select-candy";
import Candies from "./candies";
import {candySelected} from "./actions";

interface IAppProps {
    candies:any[],
    onSelect(name:string):void
}

interface IAppState {
    candies:{}
}

class App extends React.PureComponent <IAppProps, IAppState>{
  constructor(props:IAppProps){
    super(props);
    this.state = {
        candies : {}
    }
  }

  componentDidUpdate(prevProps:IAppProps, prevState:IAppState){
      if(this.props.candies !== prevProps.candies){
          const candies = {};
          for(let i = 0; i < this.props.candies.length; i++){
              candies[i] = this.props.candies[i].candyName
          }
          this.setState({candies})
      }
  }

  onSelect = (selectNum:string) => {
      this.props.onSelect(this.state.candies[Number(selectNum)-1]);
  };

  public render() {
    return (
      <div className="App">
        <SelectCandy onSelect={this.onSelect}/>
        <Candies candies={this.props.candies}/>
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
        onSelect: (candyName:string) => {
            dispatch(candySelected(candyName))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


