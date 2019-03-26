import React from "react";
import { Form, } from "semantic-ui-react";
import {AccounConsumer, AccountConsumer,} from '../providers/AccountProvider'

class AccountForm extends React.Component {
  state = { 
    username: this.props.username, 
    name: this.props.name, 
    title: this.props.title, 
    email: this.props.email, 
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }
  
  render() {
    const { username, name, title, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}


const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
       { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          name={value.name}
          title={value.title}
          email={value.email}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm