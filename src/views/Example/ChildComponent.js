import React from "react";

/*class ChildComponent extends React.Component {

    // state ={
    //     name : 'hai',
    //     age : '1256dsadas4354'
    // }
    // HandleOnChangeName = (event)=>{
    //     this.setState({
    //         name:event.target.value
    //     })
    // }
    // hanhdleclickButton = ()=> {

    //     console.log('click me')
    //     alert('click me')
    // }

    state = {
        name : '',
        age : ''
    }
    handleChaneFirstName = (event)=> {
        this.setState({
            FisrtName : event.target.value
        })
    }
    handleChaneLastName = (event)=>{
        this.setState ({
            LastName : event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        alert(' submit ok ')
        console.log("render state ", this.state)
    }


    render() {   
        
        let { FisrtName, LastName, listjobs }=this.props  // list props
        return (
           
            <>
           
            <div className="list-jobs" >
                    {
                        listjobs.map((item,index) => {
                        if(item.id > 2){
                            return (
                                <div>
                                    id :{item.id} title : {item.title} address :{item.address}
                                    <div>
                                        ten:{FisrtName} tuoii : {LastName}
                                    </div>
                                </div>
                            )
                        }
                        })
                            
                        
                    }
            </div>
                
            </>

        )
    } 
}

export default ChildComponent */
class ChildComponent extends React.Component {
    state = {
        showJobs : false
    }
    handleshowhide =() => {
        this.setState({
            showJobs: !this.state.showJobs
        })
        
    }
    handleOnclickDelete = (job)=>{
        console.log('>>handleonclickdelete',job)
        alert('delete succes ')
        this.props.deleteItemjob(job)
    }
    render(){
        let {LastName,FisrtName,listjobs } = this.props
        let {showJobs} = this.state
        return(
            <>
            { showJobs === false && <div><button onClick={()=> this.handleshowhide()}>Show</button></div>}
            {showJobs &&
            <>
                <div className="list-jobs" >
                    {
                        listjobs.map((item, index) => {
                            if (item.id !== 2) {
                                return (
                                    <div>
                                        id :{item.id} title : {item.title} address :{item.address}
                                        <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        {/* <div>
                                            ten:{FisrtName} tuoii : {LastName}
                                        </div> */}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                    <div><button onClick={()=> this.handleshowhide()}>Hide</button></div>
            </>}
            
            </>
            

        )
    }
    
}
export default ChildComponent