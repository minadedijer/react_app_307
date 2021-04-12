import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios';

class MyApp extends Component {
  state = {
    //characters: []
     characters: [
       {
         name: 'Charlie',
         job: 'Janitor',
       },
       {
         name: 'Mac',
         job: 'Bouncer',
       },
       {
         name: 'Dee',
         job: 'Aspring actress',
       },
       {
         name: 'Dennis',
         job: 'Bartender',
       },
     ]
  	};
  
    makePostCall(character){
      var newid = Math.random().toString(36).substr(2,6)
      character.id = newid
      return axios.post('http://localhost:5000/users', character)
       .then(function (response) {
         console.log(response);
         if(response.status === 201){
           return response.data;
         }
       })
       .catch(function (error) {
         console.log(error);
         return false;
       });
    }

    handleSubmit = character => {
      this.makePostCall(character).then( callResult => {
         if (callResult !== false) {
            this.setState({ characters: [...this.state.characters, callResult]});
            
         }
      });
    }
   
    
  componentDidMount() {
   axios.get('http://localhost:5000/users')
    .then(res => {
      const characters = res.data.users_list;
      this.setState({ characters });
    })
    .catch(function (error) {
      //Not handling the error. Just logging into the console.
      console.log(error);
    });
}
  makeDeleteCall(character){
      return axios.delete('http://localhost:5000/users', {params: {id: character.id}})
       .then(function (response) {
         console.log(response);
         if(response.status === 200){
           return true;
         }
       })
       .catch(function (error) {
         console.log(error);
         return false;
       });
    }
  removeCharacter = index => {
    const { characters } = this.state
    this.makeDeleteCall(characters[index]).then(deleteResult =>{
      if(deleteResult === true){
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }
  });
  
    
}
  render() {
	  const { characters } = this.state;
	
	  return (
		  <div className="container">
			  <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
	  );
  }
}

export default MyApp
