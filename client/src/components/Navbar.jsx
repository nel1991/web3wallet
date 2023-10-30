import React from  'react';
import styled from 'styled-components';

const Navbar = () => {
	
	const logo = '../../images/newlogo-transformed.png';

	return (
	
		<div className="navarea">
			
			<NavHereOne>


			<img src={logo} width="275" height="45" className="logo" /> 

			</NavHereOne>
			<NavHereTwo> 
			<h5 className="home">
				Home

			</h5>

			 </NavHereTwo>

		</div>
	
	);
}

export default Navbar;

const NavHereOne = styled.div`
	
	
	display: flex;
	


`

const NavHereTwo = styled.div`
	
	display: flex;
	justify-content: flex-end;
	flex: 1;
	margin-right: 200px;
	align-items: center;

`