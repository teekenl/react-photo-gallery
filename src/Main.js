import React, {Component} from 'react';

class Main extends Component {
    render(){
        return (
            <div>
                <h1>Photo Gallery</h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default Main
