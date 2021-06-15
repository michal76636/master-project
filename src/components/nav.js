
import React, { useState } from "react";
import _ from 'lodash'
export function Nav(props){
    return(
       <>
        <Link to="/history">
                    <Button variant="outline-success" type="button">
                    all users
               </Button>
                </Link>
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
                {props.children}

       </>
    )
}
