import React from 'react';
import { connect } from 'react-redux';
import { makeCocktail } from '../actions';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class CocktailNew extends React.Component{
	
	onCreate(event){
		event.preventDefault();	
		const name = event.target.children[1].value;
		this.props.actions.makeCocktail({name: name})
	}

	render(){
		return(
			<form onSubmit={this.onCreate.bind(this)}>
				<label>Name: </label>
				<input type="text" />
				<button type="submit">Create</button>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

const componentCreator = connect(null, mapDispatchToProps);
export default componentCreator(CocktailNew);













