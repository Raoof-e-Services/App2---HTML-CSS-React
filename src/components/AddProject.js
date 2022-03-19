import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

   static defaultProps = {
    categories:["designn","mob design","web design"]
  }
  
  handleSubmit(e){
    if (this.refs.title.value === '' ){
      alert('Title is required');

    } else{
      this.setState({newProject:{
        id:uuidv4(),
        title:this.refs.title.value,
        catagory:this.refs.category.value
      
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
   e.preventDefault();
  }

  render() {
        let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value = {category}> {category} </option>
  }); 
    return (
      <div>
        <h1>Lets add project</h1>
        
        <form onSubmit={this.handleSubmit.bind(this)}>

        <label>Title</label> <br/>
        <input type="text" ref="title"/> <br/><br/>
        
        <label>Category</label> <br/>
        <select ref="category">
        {categoryOptions} 
        </select> <br/> <br/>
        
        <input type="submit" value="Submit" />

        </form>
        </div>
    )
  }
}
// AddProject.propTypes ={
//   categories : React.PropTypes.array,
//   addProject : React.PropTypes.func
//   }

export default AddProject;
