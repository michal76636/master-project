import axios from 'axios';


  export async function signUpUser(user) {
    return   await axios.post('http://localhost:4000/newUser', user).then(
           res => {
               console.log('login work ' + JSON.stringify(res));
            //   localStorage.setItem('userId', res.data.user._id)
               return res.data
           },
           err => {
               console.log('error login: ' + err);
           }
       )
   }
  

   export async function getAllUsers() {
    const promise = new Promise((resolve, rejects) => {
         axios.get(`http://localhost:4000/getAllUsers`).then(
             res => {
                resolve(res.data)      
                  },
            err => {
                rejects(err)
            }
        )
    } )   
    return promise;

   }

   export function getMyDetails() {
    const promise = new Promise((resolve, rejects) => {
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:4000/getUser`)
            .then(
                res => {
                    resolve(res.data)
                },
                err => {
                    rejects(err)
                }
            );
    })
    return promise;
}