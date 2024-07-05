 import React from "react";
 class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state={ 
            userinfo:{ name:"xyz",
            location:"default",}
        };
        //  console.log( this.props.name+"child constructor");

    }
    async componentDidMount() {
        // console.log(this.props.name + "child component did mount");
        const data = await this.fetchData("https://api.github.com/users/Nandini675");
       this.setState({
            userinfo: data
        });
       // console.log(data);
    
    }
    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            return null;
        }
    }
    componentDidUpdate(){
// console.log("didupdte");
    }
    
   componentWillUnmount(){
    // console.log("unmount");
   } 
    render(){
         console.log(  this.props.name+"child render");
        const {login,public_repos}= this.state.userinfo;// destructring
        return(
            
            <div className="user-card">
               
            <h2>Name:{login}</h2>
            <h3>repo:{public_repos}</h3>
    <h4>Contact:nandinisharma@gmail.com</h4>
        </div>
        );
        
    };

 }
 export default UserClass;