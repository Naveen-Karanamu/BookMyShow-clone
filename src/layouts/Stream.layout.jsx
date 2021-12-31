import React from 'react'
import StreamNavbar from '../components/Navbar/StreamNavbar.component';


const StreamLayout = (props) => {
    return (
        <div>
            <StreamNavbar />
        {props.children}
        </div>
    )
}

export default StreamLayout;