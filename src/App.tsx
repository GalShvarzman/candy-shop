import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectCandy from "./select-candy";
import Candies from "./candies";
import {candySelected} from "./actions";

interface IAppProps {
    candies : any[],
    errorMsg : string,
    onSelect(name:string) : void
}

interface IAppState {
    candies : {},
    message : string
}

class App extends React.PureComponent <IAppProps, IAppState>{
    constructor(props:IAppProps){
      super(props);
      this.state = {
          candies : {},
          message : ""
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
      let message:string = "";
      const selectedCandyName = this.state.candies[Number(selectNum)-1];
      if(selectedCandyName){
          const selectedCandyIndex = this.props.candies.findIndex((candy)=>{
              return candy.candyName === selectedCandyName
          });
          if(selectedCandyIndex !== -1){
              if(this.props.candies[selectedCandyIndex].countInStock > 0){
                  this.props.onSelect(selectedCandyName);
                  message = `Enjoy your ${selectedCandyName}!`;
              }
              else{
                  message = "Candy out of stock!"
              }
          }
          else{
              message = "Something went wrong....";
          }
      }
      else{
          message = "Unknown number";
      }
      this.setState({message});
  };

  public render() {
    return (
      <div className="App">
        <Candies candies={this.props.candies}/>
        <SelectCandy errorMsg={this.props.errorMsg} message={this.state.message} onSelect={this.onSelect}/>
      </div>
    );
  }
}

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        candies : state.candies,
        errorMsg : state.errorMsg
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


