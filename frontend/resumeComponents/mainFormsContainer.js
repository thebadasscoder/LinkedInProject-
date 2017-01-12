import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import mainForm from './mainForms'


const mapStateToProps = (state, ownprops)=>{
  console.log(ownprops);
  
  return{
    userId: state.user.id,
  }
}


export default connect(mapStateToProps)(mainForm);