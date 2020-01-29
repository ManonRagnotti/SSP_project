import React, {Component, Fragment} from 'react';
import Register from "./Register";


class RegisterContainer extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    }

    render(){
        return(
            <Fragment>
                <Register/>
            </Fragment>
        )
    }

}

export default RegisterContainer