import React from 'react';
import { Card, CardTitle } from 'mdbreact';
import Popup from './../popup/Popup';
import './Cards.css';


function searchFilter(term){
		return function(x){
			return x.title.toLowerCase().includes(term.toLowerCase()) || !term ;
		}
	}

export default class Cards extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			arr : [
				{
				    "title": "LittleBigPlanet PS Vita",
				    "url": "/games/littlebigplanet-vita/vita-98907",
				    "platform": "PlayStation Vita",
				    "score": 9,
				    "genre": "Platformer",
				    "editors_choice": "Y",
				    "release_year": 2012
  				},
				  {
				    "title": "Splice: Tree of Life",
				    "url": "/games/splice/ipad-141070",
				    "platform": "iPad",
				    "score": 8.5,
				    "genre": "Puzzle",
				    "editors_choice": "N",
				    "release_year": 2012
				  },
				  {
				    "title": "Pokemon White Version 2",
				    "url": "/games/pokemon-white-version-2/nds-129228",
				    "platform": "Nintendo DS",
				    "score": 9.6,
				    "genre": "RPG",
				    "editors_choice": "Y",
				    "release_year": 2012
				  },
				  {
				    "title": "NHL 13",
				    "url": "/games/nhl-13/ps3-128181",
				    "platform": "PlayStation 3",
				    "score": 8.5,
				    "genre": "Sports",
				    "editors_choice": "N",
				    "release_year": 2012
				  },
				  {
				    "title": "Total War Battles: Shogun",
				    "url": "/games/total-war-battles-shogun/mac-142565",
				    "platform": "Macintosh",
				    "score": 7,
				    "genre": "Strategy",
				    "editors_choice": "N",
				    "release_year": 2012
				  },
				  {
				    "title": "Double Dragon: Neon",
				    "url": "/games/double-dragon-neon/xbox-360-131320",
				    "platform": "Xbox 360",
				    "score": 3,
				    "genre": "Fighting",
				    "editors_choice": "N",
				    "release_year": 2012
				  },
				  {
				    "title": "Guild Wars 2",
				    "url": "/games/guild-wars-2/pc-896298",
				    "platform": "PC",
				    "score": 9,
				    "genre": "RPG",
				    "editors_choice": "Y",
				    "release_year": 2012
				  },
				  {
				    "title": "LittleBigPlanet Marvel Super Hero Edition",
				    "url": "/games/littlebigplanet-ps-vita-marvel-super-hero-edition/vita-20027059",
				    "platform": "PlayStation Vita",
				    "score": 9,
				    "genre": "Platformer",
				    "editors_choice": "Y",
				    "release_year": 2012
				  },
			],
			popup:false,
			value:{},
			term:'',
		}
	}

	openPopup(v,i){
		this.setState({
			popup:true,
			value:this.state.arr[0],
		})
		console.log(v)
	}

	closePopup(){
		this.setState({
			popup:false,
		})
		// console.log('agag');
	}

	searchHandle(e){
		this.setState({
			term : e.target.value
		})
	}


	render(){
		return(
			<div className="container-fluid p-0">
			<div>
					{
						(this.state.popup) ? 
						<Popup 
							close = {this.closePopup.bind(this)} 
							data = {this.state.value}
						/>:null
					}

			</div>
			{/*<div>
				{
					(this.state.popup) ?
					<Popup/>:null
				}
			</div>*/}
			<div className="main-container row" >
				<div className="container-fluid">
						<input className = "search-box text-left col-12 mt-5" type="textbox d-inline-block" placeholder="Search Games"
							onChange={this.searchHandle.bind(this)} />
				</div>
				{
					this.state.arr.filter(searchFilter(this.state.term)).map(function(v,i){
						return(
							 
							 <Card  className="first-card mt-4 container " key={'i_'+i} onClick = {this.openPopup.bind(this,i)}>
							 	{
					 		 		(v.platform === 'PlayStation Vita') ? 
					 			 		<img className = "platform-container " src="https://image.flaticon.com/icons/svg/588/588286.svg" alt=""/> 
					 			 	:(v.platform === 'iPad') ? 
					 			 		<img className="platform-container" src="https://image.flaticon.com/icons/svg/0/319.svg" alt=""/> 
					 			 	: (v.platform === 'PC' | v.platform === 'Macintosh') ? 
					 			 		<img className = "platform-container" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADTSURBVEhL7dWtCsJgFIDhqVXxpxq9AC9Cs0GwGExGszcg2LwFi4jgBVi8CIvBbhcViyDqewbCcOdjEw6I+L3whH37ObCNLfB9sxzKhgpIrIczHsY2qEItixPuOBi6QIZPoFaEHHAMt+zqQq47D7eU/GCr/OBYfrBVfnCs12D5tjYNjZFqcFo7yN3R9mmcg/PQTtDsIf/tVmQtyQzOttBOendFH4vIWpIBnNUwxdrQCkPIHfqd6uik0EYFJpVwg/bcNM6399MyGGGZgrxsDfj+viB4AqtozHga98ktAAAAAElFTkSuQmCC" alt=""/>
					 			 	: (v.platform === 'Xbox 360') ?
					 			 		<img className = "platform-container" src = "https://image.flaticon.com/icons/svg/871/871397.svg" alt=""/>	
					 			 	: (v.platform === 'PlayStation 3') ? 
					 			 		<img className = "platform-container" src = "https://image.flaticon.com/icons/svg/588/588285.svg" alt=""/>
					 			 	: (v.platform === 'Nintendo DS') ?
					 			 		<img className = "platform-container" src="https://image.flaticon.com/icons/svg/588/588250.svg" alt=""/>
					 			 	:null 		
							 	}	
							 	<img src="https://yt3.ggpht.com/9jcfdgLv9nQmmN0kKPmZ6qY8GwVANS8CDHdE6-r8q38s889suLyyuuObsRd2fQmzKOE73dbpXhsZy2CJpA=s900-mo-c-c0xffffffff-rj-k-no" className="image-container w-responsive" alt=""/>
							 	<div id="text-container">
								 	<CardTitle className="title-container text-center m-0 pl-1">
								 		<strong>{v.title}</strong>
								 	</CardTitle>
								 	<h6 className="genre-container text-center">{v.genre}</h6>
								 	<div className = "row p-0 m-0">
								 		<div className = "col-6 text-left p-0">
								 			<h5 className="m-0 pt-2">Release: {v.release_year}</h5>
								 		</div>
								 		<div className = "col-2 text-center p-0">
								 			{
									 			(v.editors_choice === "Y")?
										 			<img className="editorschoice-container " src="http://www.superplusgames.com/img/blog/blogeditor.png" alt=""/>
									 			:
									 				null
									 			
								 				
								 			}

								 		</div>
								 		<div className = "col-4 text-right pl-3 m-0">
								 			<table>
								 				<tr >
										 			<td >
										 				<img className="star-container pb-2 mt-2" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/star-icon.png" alt=""/>
										 			</td>
										 			<td>
										 				<p className="m-0 text-right pl-2 mt-2">{v.score}</p>
										 			</td>
										 		</tr>
										 	</table>
								 		</div>
								 	</div>
								 </div> 
							 </Card>

						)
						
					}.bind(this))
				}
			</div>
			</div>
		)
	}
}