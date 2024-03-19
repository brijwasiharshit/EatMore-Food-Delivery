import React from "react";
class UserCardClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        count2: 1};
    }
    render() {
        const {name} = this.props;
        return (
            <div className='user-card'>
              <h2>{name}</h2>
              <h2>count : {this.state.count}</h2>
              <button onClick={()=>{this.setState({count : this.state.count+ 1,count2 : this.state.count2+1});
              }}>Increase Counts</button>
              <h2>count2 : {this.state.count2}</h2>
            <h3>User Card Class</h3>
              <h4>harshit.brizwasi@gmail.com</h4>
            </div>
          );
    }

}
export default UserCardClass;
