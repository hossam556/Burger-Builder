import React , {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../auxilary/auxilary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
   state={
      showSideDrawer : false ,
   }

   SideDrawerCloseHandler=()=>{
      this.setState({showSideDrawer : false})
   }

   SideDrawerToggleHandler=()=>{
      this.setState((prevState)=>{
       return  {showSideDrawer : !prevState.showSideDrawer}})
   }


   render(){
      return(
         <Aux>   
           <Toolbar 
           isAuth ={this.props.isAuthenticated}
           drawerToggleClicked={this.SideDrawerToggleHandler} /> 
           <SideDrawer 
           isAuth ={this.props.isAuthenticated}
           closed = {this.SideDrawerCloseHandler}
           open={this.state.showSideDrawer}/>
           <main className={classes.Content}>
           {this.props.children}
           </main>
         </Aux>

      )
   }
}
 
const mapStateToProps = state =>{
   return {
      isAuthenticated : state.auth.token !== null
   }
}

export default connect(mapStateToProps)(Layout) ;