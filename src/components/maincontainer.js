import React, { Component } from 'react';
import Header from './header/header';
import MainBody from './body/mainbody';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.mainbody = React.createRef();
        this.header = React.createRef();
        this.setLoadedContent = this.setLoadedContent.bind(this);
        this.setHeaderContent = this.setHeaderContent.bind(this);
        this.state = { 
         }
    }

    setLoadedContent(cont){
        this.mainbody.current.setMainBodyContent(cont);
    }

    setHeaderContent(cont){
        this.header.current.setHeaderLoadedContent(cont);
    }

    render() { 
        return ( 
            <div>
                <Header ref={this.header} setBodyContent={this.setLoadedContent}/>
                <MainBody ref={this.mainbody} setHeaderContent={this.setHeaderContent}/>
            </div>
         );
    }
}
 
export default MainContainer;