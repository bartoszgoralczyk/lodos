import React from 'react'
import {
    InputGroup,
    Label, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import { connect } from 'react-redux'
import { registerUser } from '../actions/formActions'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',

        errors: {}
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }


    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,

        }

        this.props.registerUser(newUser, this.props.history)

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({
                errors: this.props.errors
            })
        }
    }


    render() {

        const { errors } = this.state

        return (
            <div >


                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center mb-5'>Register</h1>
                            <form onSubmit={this.onSubmit} >
                                <InputGroup className='my-2'>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="name" onChange={this.onChange} className={classnames('', { 'is-invalid': errors.name })} value={this.state.name} name='name' />
                                    <div className='invalid-feedback'>{errors.name}</div>


                                </InputGroup>
                                <InputGroup className='my-2'>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="email" onChange={this.onChange} className={classnames('', { 'is-invalid': errors.email })} value={this.state.email} name='email' />
                                    <div className='invalid-feedback'>{errors.email}</div>
                                </InputGroup>

                                <InputGroup className='my-2'>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input  type='password' placeholder="password" onChange={this.onChange} className={classnames('', { 'is-invalid': errors.password })} value={this.state.password} name='password' />
                                    <div className='invalid-feedback'>{errors.password}</div>
                                </InputGroup>

                                <InputGroup className='my-2'>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='password' placeholder="confirm password" onChange={this.onChange} className={classnames('', { 'is-invalid': errors.password2 })} value={this.state.password2} name='password2' />
                                    <div className='invalid-feedback'>{errors.password2}</div>
                                </InputGroup>
                                <small className='float-left pb-2'>Already a member? <Link to='/login'>Log in</Link></small>

                                <InputGroup className='ml-4 ' >

                                    <Input type="checkbox" className='form-check-input' id="invalidCheck" required />
                                    <Label check className="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                        </Label>
                                </InputGroup>

                                <Input type='submit' value='Register' className='ttn btn-info btn-block mt-4 p-2' />

                            </form>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}


const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.form

})

export default connect(mapStateToProps, { registerUser })(Signup)
