import React from "react";
class AddComponent extends React.Component {
    state = {
        
        title: '',
        address: ''
    }
    
    handleChaneFirstName = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleChaneLastName = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // không cần phải load lại trang
        if(!this.state.title||!this.state.address){
            alert(`can't submit null`)
            return
        }
        else
        {
            alert(' submit ok ')
            this.props.addNewJob({
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                address: this.state.address
            })
            console.log('check data submit', this.props)

        }
        this.setState({
            title :'',
            address : ''
        })
    }
    render(){
        // console.log('check sate',this.state)
        
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">title</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChaneFirstName(event)} /><br />
                    <label htmlFor="lname">address</label><br />
                    <input type="text" value={this.state.address} onChange={(event) => this.handleChaneLastName(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
            
        )
    }
}


export default AddComponent