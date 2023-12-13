import React from "react";
import './todo.scss';
import Addtodo from "./Addtodo";

class AlltodoApp extends React.Component {
    state = {
        
        worker : [
            {id : '1',
             name : 'student' 
            } ,
            {id :'2'  ,
            name :'teacher'},
            {id : '3',
            name : 'doctor'}            
        ]
    }
    render(){
        let  listworker  = this.state.worker
        console.log(`check state`, listworker)
        return(
            <>
                
            <div className="alllist-worker">
                    <div className="add-worker"><Addtodo>{listworker = this.state.worker}</Addtodo> </div>              
                <div className="list-worker">
                    
                   {
                            listworker && listworker.length > 0 && 
                            listworker.map((item,index) => {
                        return(
                            <div className="item-worker" key={item.id}>
                                <span> id : {item.id} - name : {item.name}
                                </span> 
                                <button style={{ marginLeft: 20 }}>EDIT</button>
                                <button style={{ marginLeft: 10 }}>DELETE</button>
                            </div>

                        )
                    })
                   }
                   
                  
                </div>     
            </div>
            </>

        )
    }
}
export default AlltodoApp ;