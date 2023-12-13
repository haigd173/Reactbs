import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

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
        FisrtName : '',
        LastName : '',
        arrayJobs : [
            { id: '1', title: 'developer', address: 'distric 13' },
            { id: '2', title: 'project manager', address: 'distric 15' },
            { id: '3', title: 'product ', address: 'distric 16' }
        ],
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
        event.preventDefault() // không cần phải load lại trang
        alert(' submit ok ')
    }
    addNewJob = (job) =>{
        console.log('check job from parent', job)       
        this.setState({
            arrayJobs: [...this.state.arrayJobs,job]
        })
    }
    deleteItemjob = (job)=>{
        let currenjobs = this.state.arrayJobs
        currenjobs = currenjobs.filter(item => item.id !== job.id)
        this.setState({
            arrayJobs: currenjobs
        })
    }


    render() {

        // console.log("render state ",this.state)
        return (
           
            <>
                {/* <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"  value={this.state.FisrtName} onChange={(event) => this.handleChaneFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.LastName} onChange={(event) => this.handleChaneLastName(event)}/><br /><br />
                    <input type="submit" onClick={(event)=>this.handleSubmit(event)}/>
                </form> */}
                
                <AddComponent addNewJob = {this.addNewJob} />
                <ChildComponent FisrtName={this.state.FisrtName} LastName={this.state.LastName}
                   listjobs = {this.state.arrayJobs} 
                   deleteItemjob =  {this.deleteItemjob}
                />
                
                    
                
            </>

        )
    } 
}

export default MyComponent