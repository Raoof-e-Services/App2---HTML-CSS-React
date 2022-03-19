import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import $ from 'jquery';
import Todos from './components/Todos';


class App extends Component {
  constructor (){
    super();
    this.state = {
      projects:[],
      todos:[] 
    }
  }
  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success:function(data){
        this.setState({todos:data}, function(){


        });

      }.bind(this),
      error:function(xhr, status, err){
        
      }

    });

  }
  getProjects(){
    this.setState({projects:[
      {
        id:uuidv4(),
        title:'Business Website',
        catagory:'web design'
      },
      {
        id:uuidv4(),
        title:'Social App',
        catagory:'Mobile development'
      },
      {
        id:uuidv4(),
        title:'Ecommerece shopping Cart',
        catagory:'web dev'
      },
      {
        id:uuidv4(),
        title:'hahaha',
        catagory:'laugh therapy'
      },
    ]});

  }
  
    componentWillMount(){
      this.getProjects();
      this.getTodos();
    }
    
    componentDidMount(){
      this.getTodos();
    }
    
    handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  
  }
  handleDeleteProject(id){
    let projects =this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});

  }
  render() {
    

    return (
      <div className='App'>
        <h1>Welcome to the world of react.</h1>
        <h2>The message below is send by using variables </h2>
       
        <Projects  test ="Lets Play React" /> 
       
        <h1>How to set state of a component </h1>
        <p>Mapping data of an array to a list item.In this case we are setting state of a list item</p>
       
       <Projects  projects={this.state.projects} onDelete= {this.handleDeleteProject.bind(this)} />
       
       <AddProject addProject={this.handleAddProject.bind(this)} />
       
       <hr/>
       
       <Todos todos = {this.state.todos}/>
       
       </div>
      
    )
  }
}



export default App;
