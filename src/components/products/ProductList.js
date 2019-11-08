import React, { Component } from 'react'
import { connect } from "react-redux";
import {Badge} from 'reactstrap';
class ProductList extends Component {
    render() {
        return (
            <div>
               
                 <h3> <Badge color="warning">ProductList</Badge>  <Badge color="success">{this.props.currentCategory}</Badge> </h3>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      currentCategory: state.changeCategoryReducer
      
    };
  }

  export default connect(
    mapStateToProps
  )(ProductList);