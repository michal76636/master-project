import React, { useEffect } from "react";
import { Card , Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { getMyDetails} from './service';

import { Link } from 'react-router-dom'
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  }
}


  const mapDispatchToProps = (dispatch) => ({
    setMyDetails: (details) => dispatch(actions.setMyDetails(details)),
  })
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Massage(props) {
    const { user,setMyDetails } = props;
let d;
  let arr=Object.keys(user);
    useEffect(() => {
      getMyDetails().then(data => { console.log(data); d=data;
        alert(`my name is ${data.name} and i'm ${data.age} years old, from ${data.city}, mail: ${data.email}, tel: ${data.tel}`) ,
        setMyDetails(data) })
          .catch(err => {  alert(`my name is ${arr[0]} and i'm ${arr[1]} years old, from ${arr[2]}, mail: ${arr[3]}, tel: ${arr[4]}`) ,

            console.log(err) });
  }, [])

    return (
      <>
       <Link to="/history">
                    <Button variant="outline-success" type="button">
                    all users
               </Button>
                </Link>
            
                <Link to="/">
                    <Button variant="outline-success" type="button">
                    back
               </Button>
                </Link>
       <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>My Details: </h1>
    
       <div  className="row d-flex justify-content-center">
         {`my name is ${arr[0]} and i'm ${arr[1]} years old, from ${arr[2]}, mail: ${arr[3]}, tel: ${arr[4]}`}
                                 
        </div>
    </>
     ) 
  }
))
