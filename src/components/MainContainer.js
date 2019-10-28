import React from 'react'
import TopBarDrawer from "./TopBarDrawer";
import { tsConstructorType } from "@babel/types";


class MainContainer extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            courseName: 'SENG310'
        }
    }

    render() {
        return(
            <div className='main'>
                <TopBarDrawer/>
            </div>
        )
    }
}

export default MainContainer;