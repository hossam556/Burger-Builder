import React ,{Component}from 'react';
import classes from './modal.module.css';
import Aux from '../../../hoc/auxilary/auxilary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps,nextState){
     return (nextProps.show !== this.props.show || nextProps.children !== this.props.show)
  }

  componentDidUpdate(){
    console.log('[modal] didUpdate')
  }

  render() {
    return(
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div 
      className={classes.Modal}
      style={{
        transform:this.props.show? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show? '1' : '0'
      }}>
         {this.props.children}
      </div>
  </Aux>
    )
  }
}
   
export default Modal ;