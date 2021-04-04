import React from 'react'
import Table from './Table'
const characters = [
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
		{
		              name: 'Jen',
		              job: 'Swag Captain',
		            },

];

function MyApp() {
	    return (
		          <div className="container">
		            <Table characterData={characters}/>
		          </div>
		        );  
}

export default MyApp;
