import React from 'react';
import { Card, Button ,Fa } from 'mdbreact';
import './Popup.css';


export default class Popup extends React.Component{
	constructor(props){
		super(props);
		this.state ={

		}
	}
	
	closePopup(){
 		this.props.close();
 	}

	render(){
		return(
			<div className='' style={{height:'100%',width:'100%',position:'fixed',background:'rgba(0,0,0,.7)',zIndex:'9',top:'0',left:'0'}}>
				<Card className="main-popup d-block text-center" style={{marginLeft:'calc(50% - 150px)',marginTop:'calc(50vh - 150px )'}}>
					<div>
						<div>
							<div className="title-container">
								{this.props.data.title}
							</div>
							<div className="title-container">
								{this.props.data.genre}
							</div>
							<div className="title-container">
								{this.props.data.platform}
							</div>
							<div className="title-container">
								{this.props.data.url}
							</div>
							<div className="title-container">
								Released : {this.props.data.release_year}
							</div>
							<Button color = "amber" className="button-container text-center" onClick = {this.closePopup.bind(this)} value="X">X</Button>
						</div>
	 				</div>
				</Card>
			</div>
		)
	}
}