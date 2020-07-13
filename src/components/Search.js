import React, { Component } from 'react'
import { Button,FormControl,InputGroup,Row,Card,Col} from 'react-bootstrap';
import axios from "axios";
import Singlebook from './Singlebook';


export default class Search extends Component {

    constructor(props)
    {
      super(props);
    
      // this line is very important if you want to use this.state in functions
      this.searchChange=this.searchChange.bind(this);
      this.getData=this.getData.bind(this);
     this.state={

        books:[],
        searchword:"",
     }
    
    }


    searchChange(event){
        this.setState({...this.state,searchword:event.target.value});

        

    }


    getData()
    {


/// api call with axios

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchword}`).then(data=>{

 this.setState({...this.state,books:data.data["items"]});



})


    }


    render() {
        return (
            <>
            <InputGroup style={{marginTop: "20px"}}> 
            <FormControl
              placeholder="Search Book"
              aria-label="Search Book"
              aria-describedby="basic-addon2"
              onChange={this.searchChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.getData}>Search</Button>
              
            </InputGroup.Append>
          </InputGroup>

{this.state.books.map((ele,i)=>(


    

<Singlebook volumeInfo={ele.volumeInfo} />



 
    
    
    
    ))}




</>

          
        )
    }
}
