import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function CocktailsIndex(props){
	return (
		<div>
			<ul className="col-md-4">
				<button><Link to={"/cocktails/new"}>Make A Drink</Link></button>
      	{
      		props.cocktails.map(
	      		cocktail =>
	      		<Link to={`/cocktails/${cocktail.id}`}>
	      			<li key={cocktail.id}>
	      				{cocktail.name}
	      			</li>
	      		</Link>
	      	)
      	}
   		</ul>
   		<div className="col-md-8">{ props.children }</div>
		</div>
	)
}

function mapStateToProps(state){
	// can call this whatever we want
	return{
		cocktails: state.cocktails
	}
}

const componentCreator = connect(mapStateToProps);
export default componentCreator(CocktailsIndex);














