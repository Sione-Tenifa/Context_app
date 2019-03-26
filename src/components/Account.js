import React from 'react'
import { Card, } from 'semantic-ui-react'

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Username
      </Card.Header>
      <Card.Meta>
        Email: email
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Email</p>
    </Card.Content>
  </Card>
)
 
export default Account 