import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from "react-redux";
import { getProjects } from "../Actions/projectActions";
import PropTypes from "prop-types";


 class DashBoards extends Component {

    componentDidMount() {
      this.props.getProjects();
    }
  render() {

    return (

      
           //<!-- Dashboard Component (Project Item included) -->

    <div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
               
               <CreateProjectButton />
                <br />
                <hr />
              <ProjectItem />
            </div>
        </div>
    </div>
</div>


    );
  }
}

DashBoards.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(DashBoards);
