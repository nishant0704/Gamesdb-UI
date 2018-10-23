import React from 'react';
import { Button , input } from 'mdbreact';
import Cards from './../card/Cards';
import './SearchBar.css';

export default class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	myFunction(){

	}

	render(){
		return(
			<div className="main-container">
				
					<Button type="primary">Welcome</Button>
					<div className="container-fluid">
						<input className = "search-box text-left col-12" type="textbox d-inline-block" placeholder="Search Games"/>
					</div>
					{/*<i className="fa fa-search d-inline-block"/>*/}
						
			</div>
		)
	}
}



{/*function myFunction() {
    var filter, li, a, i;
    filter = input.value.toUpperCase();
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}*/}