import React from 'react'
import { Card, Image} from 'semantic-ui-react'
import { AccountConsumer, } from "../providers/AccountProvider";
import joe from './joe.jpg';


const Account = () => (
  <AccountConsumer>
    { value => (
      <Card>
        <Image  src={joe}/>
        <Card.Content>
          <Card.Header>
            {value.username}
          </Card.Header>
          <Card.Meta>
            Name: {value.name}
          </Card.Meta>
          <Card.Meta>
            Title: {value.title}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Email: {value.email}</p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)
 
export default Account 
