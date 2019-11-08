import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem ,Badge} from "reactstrap";


class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    //console.log();
  }

  selectCategory = (category)=> {
    this.props.actions.changeCategory(category)
  }
  render() {
    return (
      <div >
       
        <h3> <Badge color="warning">CategoryList</Badge> </h3>
        <h3>Kategori Sayısı :{this.props.categories.length}</h3>
      
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem active={category.title === this.props.currentCategory ? true :false}
             onClick={()=>this.selectCategory(category.title)} key={category.id}>
            
              {category.id}.{category.title} <br />
              <img src={category.url} width="100px" alt={category.title}></img>
            </ListGroupItem>
          ))}
        </ListGroup>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}
function mapDispacthToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(CategoryList);
