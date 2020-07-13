import React, { Component } from 'react'
import { Button,FormControl,InputGroup,Row,Card,Col} from 'react-bootstrap';
export default class Singlebook extends Component {
 constructor(props)
 {
     super(props);
     console.log(this.props);
 }


    render() {
        return (
         


    <Col><Card style={{ width: '18rem' ,margin:40 }}>
  <Card.Img variant="top" src=  {this.props.volumeInfo.imageLinks.thumbnail} />
  <Card.Body>
        <Card.Title>{this.props.volumeInfo.title}</Card.Title>
    <Card.Text>
    {this.props.volumeInfo.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>



        )
    }
}
