import React from "react";

class Addtodo extends React.Component
{
    
    render(){
        let listworker = this.props
        console.log("checkstate2", listworker )
        return (
            <div>
                <input type="text" ></input> <button>add</button>
            </div>
        )
    }
}
export default Addtodo