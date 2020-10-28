import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./SidebarContent";
import Mapbox from "../Map/Mapbox";

class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }

    onSetSidebarOpen(open){
        this.setState({ sidebarOpen: open });
    }

    render(){

        return (
            <div id={"header"} style={{color: "black"}}>
                <Sidebar
                    sidebar={<SidebarContent/>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{sidebar: {background: "white", width: 300}}}
                >
                    <button
                        onClick={()=> this.onSetSidebarOpen(true)}
                        style={{position: "absolute", right: "5%", height: "40px", width: "10%", top: "5px"}}
                    >
                        Open Sidebar
                    </button>
                </Sidebar>
                <Mapbox/>
            </div>
        );

    }
}

export default Layout;