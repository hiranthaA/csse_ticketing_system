import React, { Component } from 'react';
import Header from './header/header';
import MainBody from './body/mainbody';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.mainbody = React.createRef();
        this.setLoadedContent = this.setLoadedContent.bind(this);
        this.state = { 
         }
    }

    setLoadedContent(cont){
        this.mainbody.current.setMainBodyContent(cont);
    }

    render() { 
        return ( 
            <div>
                <Header setBodyContent={this.setLoadedContent}/>
                <MainBody ref={this.mainbody}/>
            </div>
         );
    }
}
 
export default MainContainer;