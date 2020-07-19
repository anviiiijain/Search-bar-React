import React,{Component} from 'react';
import './App.css';
import Data from "./Data.js"
import Cards from "./Cards.js"

class App extends Component{
  constructor(){
    super()
    this.state={
      monsters:[]
    }
  }
  componentDidMount(){
  this.setState({monsters:Data});
  }
  render(){
    const st=this.state.monsters.map(da=>
      (<Cards name={da.name} id={da.id}/>)
      )
    return(
    <div className="whole">
      <div className="Header">
        <input type="text" placeholder="Search For Monsters"/>
        </div>
        <div className="Cards-show">
          {st}
        </div>
    </div>
    )
  }
}

export default App;