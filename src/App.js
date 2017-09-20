import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './action/actionCreator';
import Main from './Main';


function mapStateToProps (state){
    return {
        post: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);


export default App;
