import React, {Component} from 'react';


class Projectitem extends Component{
    
deleteProject(id) {
  alert("project will delete");
  this.props.onDelete(id);
}

  render() {
   
    return (
      <li className='Project'>
          <strong>{this.props.project.title} </strong>: 
           {this.props.project.catagory} ----------------------------------
           <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

      </li>
    )
  }
}

// Projectitem.propTypes ={
//   project : React.PropTypes.object,
//   onDelete : React.PropTypes.func
//   }


export default Projectitem;
