import React from 'react'
import { useState, useEffect } from 'react'
//import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { getAllUsers } from './service';
import { Card, Button } from 'react-bootstrap';



// const mapDispatchToProps = (dispatch) => ({
//   setAllUser: (user) => dispatch(userAction.setAllUser(user)),
// })



export default function History(props) {
  let allData;
  useEffect(() => {             
    getAllUsers().then(data => { allData=data;
    //  setAllUsers(data)
       })
    .catch(err => { console.log(err) });
    }  
, [])

  return (
    <>
                <Link to="/">
                    <Button variant="outline-success" type="button">
                    home
               </Button>
                </Link>
       <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>All Users: </h1>
            { allData ?
                <div>
                    {allData.map(item => (
                        <div key={item.name} className="row d-flex justify-content-center">
                            <div className="col-6 post-div">
                                <div><h5>{item.mail}</h5></div>
                        
                            </div>
                        </div>
                 ))}
                 
                </div>
                 : ''
            }  
    </>
  )
}
