import React, { Component } from 'react'
import CardList from "./CardList";
import { robots } from "./RobotList";  
import SeachBox from './SeachBox';




 

class  App extends Component{

    constructor() {

        super();
        this.state = {
          robots: robots,
          searchField: ""
        }
    }

    onSearchChange  = (event) => {
        this.setState({searchField: event.target.value});
       
    
    }

    render() {

         const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
 return (
    <div className='tc'>
    <h1 className='f1'>My Robots Collection</h1>
    <SeachBox    searchChange= {this.onSearchChange}/>
      <CardList robots={filteredRobots} />
      
    </div>
  );

    }
 
}

export default App;
