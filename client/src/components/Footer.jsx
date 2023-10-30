import React from 'react'
import styled from 'styled-components'

const Footer = () => {

	const logo = '../../images/newlogo-transformed.png';	

	return (
		<div className="Footer">

			<LogoHere>
						<img src={logo} width="275" height="45" className="logo" /> 

			</LogoHere>

			<CopyrightHere>
						<h2 className="right"> Copyright © YourCryptWallet. All rights reserved. </h2>

			</CopyrightHere>



		</div>
	);
}

export default Footer;

const LogoHere = styled.div`
	background-color:black;
	padding:20px;
	display:flex;



`

const CopyrightHere = styled.div`
		display: flex;
		background-color: black;
		color: white;
		align-items: center;
		justify-content: center;
		flex: 1;


`
