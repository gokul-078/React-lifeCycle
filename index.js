import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Without lifecycle of react:
class Car extends React.Component{
  constructor(){
    super();
    this.state = {firstValue: "Welcome"}
  }
  render(){
    return <h1>{this.state.firstValue} to the Car World!</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);

// In React lifecycle, there are four phases:
/* 
  1.Initial Phase
  2.Mounting Phase
    a).In this phase 'componentWillMount()' is a predefined function it is used before invoking the function.
    b).In this phase 'componentDidMount()' is a predefined function it is used after invoking the function.
  3.Updating Phase
    a).In this phase 'componentWillUpdate()' is a predefined function it is used before component is re-rendered.
    b).In this phase 'componentDidUpdate()' is a predefined function it is used after component is re-rendered.
    c).In this phase 'ShouldComponentUpdate()' is a predefined function it is used to check whether the component is updated or not.
  4.Unmounting Phase
    a).'componentWillUnmount()' this method is invoked immediately before a component is destroyed & Un-mounted permanently.
*/

// componentWillMount:
class Learn extends React.Component{
  constructor(){
    super();
    this.state = {lang: "React"};
  }
  componentWillMount(){
    alert("Learn react lifecycle in youtube");
  }
  render(){
    return <h1>Lifecycle in {this.state.lang}</h1>
  }
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Learn />);

// componentDidMount:
class Learn1 extends React.Component{
  constructor(){
    super();
    this.state = {framework: "Bootstrap"}
  }
  componentWillMount(){
    alert("Learn bootstarp in Tutor joes");
  }
  render(){
    return <h2>Learn {this.state.framework} in Youtube!</h2>
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({framework: "React JS"})
    }, 3000);
  }
}

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Learn1 />);

// componentWillUpdate:
class Lifecycle extends React.Component
{
  constructor(){
    super();
    this.state={value:'Welcome to',name:'Pumo Tech'}
  }
  componentWillMount()
  {
    alert('Learn ReactJS Lifecycle in Pumo Tech');
  }
  render(){
    return <div>
      <h1>{this.state.value} {this.state.name}</h1>
      <br/>
      <button type="button" onClick={this.changevalue}>Change Value</button>
    </div>
    }
    changevalue = () =>{
      this.setState({value:"Get Update with"});
    }
    componentDidMount()
    {
      setTimeout(() =>{
        this.setState({value:"Thank You"})},5000)
    }
    componentWillUpdate(){
      alert("Do you Want Update a New Value");
    }
}

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<Lifecycle />);

// componentDidUpdate:
class Lifecycle1 extends React.Component
{
  constructor(){
    super();
    this.state={value:'Welcome to',name:'Pumo Tech'}
  }
  componentWillMount()
  {
    alert('Learn ReactJS Lifecycle in Pumo Tech');
  }
  render(){
    return <div>
      <h1 id='root0'>{this.state.value} {this.state.name}</h1>
      <br/>
      <button type="button" onClick={this.changevalue1}>Change Value-1</button>
    </div>
    }
    changevalue1 = () =>{
      this.setState({value:"Get Update with"});
    }
    componentDidMount()
    {
      setTimeout(() =>{
        this.setState({value:"Thank You"})},5000)
    }
    componentWillUpdate(){
      alert("Do you Want Update a New Value");
    }
    componentDidUpdate(){
      document.getElementById("root4").innerHTML ="NEW VALUE UPDATED SUCESSFULLY "+this.state.value;
    }
}

const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<Lifecycle1 />);

// ShouldComponentUpdate and componentWillUnmount:
class Lifecycle2 extends React.Component
{
  constructor(){
    super();
    this.state={value:'Welcome to',name:'Pumo Tech'}
  }
  componentWillMount()
  {
    alert('Learn ReactJS Lifecycle in Pumo Tech');
  }
  render(){
    return <div>
      <h1 id='root0'>{this.state.value} {this.state.name}</h1>
      <br/>
      <button type="button" onClick={this.changevalue2}>Change Value-2</button>
      <button type="button" onClick={this.Deleteheader}>Delete Header</button>
    </div>
    }
    changevalue2 = () =>{
      this.setState({value:"Get Update with"});
    }
    componentDidMount()
    {
      setTimeout(() =>{
        this.setState({value:"Thank You"})},5000)
    }
    componentWillUpdate(){
      alert("Do you Want Update a New Value");
    }
    componentDidUpdate(){
      alert("Component updated successfully!");
    }
    shouldComponentUpdate(){
      return true;  // false
    }
    Deleteheader=() =>{
      this.setState({value:false, name:false});
    }
    componentWillUnmount()
    {
      alert("Header Deleted");
    }
      
}

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<Lifecycle2 />);







