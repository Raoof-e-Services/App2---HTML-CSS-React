import React, {Component} from 'react';
import Projectitem from './Projectitem'; 



class Projects extends Component{
 
  deleteProject(id){
    this.props.onDelete(id);
 
  }
  render() {
    let projectItems;
    if (this.props.projects){
        projectItems = this.props.projects.map(project=>{
        // console.log(project) ;   
      return(
        <Projectitem onDelete={this.deleteProject.bind(this)} keys={project.title}  project = {project} />
      );
        
      });
        
    }
    return (
      <div className='Projects'>
        Myy first project.<br/><br/>
        {this.props.test}
        {projectItems}  
      </div>
    )
  }
}
// Projects.PropTypes ={

//  projects : React.PropTypes.array,
//  onDelete : React.PropTypes.func

// }

export default Projects;
