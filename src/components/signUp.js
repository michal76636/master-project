import React, { useState } from "react";
import { userAction } from './redux/actions/userAction'
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import { signUpUser } from './service'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(userAction.setName(name)),
    setAge: (age) => dispatch(userAction.setAge(age)),
    setCity:(city) => dispatch(userAction.setCity(city)),
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    setTel: (tel) => dispatch(userAction.setTel(tel)),

    addUser: (user) => dispatch(userAction.addUser(user)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function SignUp(props) {
    const { addUser } = props;

    const [name, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

  
    function add() {
        let result = signUpUser({ name: name, age: age, city:city, email: email, tel:tel})
        console.log("result" + result)
        let resultnewUser = JSON.parse(result)
        addUser(resultnewUser)
    }
    return (
        <>
           <Link to="/history">
                    <Button variant="outline-success" type="button">
                    all users
               </Button>
                </Link>
                <Link to="/massage">
                    <Button variant="outline-success" type="button">
                    massage
               </Button>
                </Link>

            <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '600px' }}>
                <Card.Header as="h1" style={{ color: "rgb(115, 131, 115)" }}>Connect</Card.Header>
                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter name</Card.Text>
                <input type="text" value={name} onChange={(e) => setUserName(e.target.value)}   ></input>

                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter age</Card.Text>
                <input type="password" value={age} onChange={(e) => setAge(e.target.value)} ></input>

                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter city</Card.Text>
                <input type="password" value={city} onChange={(e) => setCity(e.target.value)} ></input>

                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter email</Card.Text>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter tel</Card.Text>
                <input type="namber" value={tel} onChange={(e) => setTel(e.target.value)} ></input>

              
                <Button variant="outline-success" onClick={add} type="button">
                 add User
               </Button>                 <br></br>  <br></br>


               
            </Card>
        </>
    );

}))
