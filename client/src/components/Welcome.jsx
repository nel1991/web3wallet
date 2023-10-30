import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';


const Input = ({ placeholder, name, type, value, handleChange}) => (
	<input placeholder={placeholder} type={type} step="0.0001" value={value} onChange={(e) => handleChange(e, name)} className="inputhere"/>

);



const Welcome = () => {

const { connectWallet, currentAccount, currentBalance, formData, setFormData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);



	

	// const connectWallet = () => {


	// }

	const handleSubmit = (e) => {

		const { addressTo, amount, keyword, message } = formData;

		e.preventDefault();

		if(!addressTo || !amount || !keyword || !message) return;

		sendTransaction();


	}	

	return (
		<div className="blockarea">

				<div className="descriptionarea">

					<div className="centerdescrip">
						<h2 className="dtext">
							Send Crypto/Etherium <br /> to other wallets! <br />	
							{/*with no hassle! */}

						</h2>

						
					</div>
					<div className="centerdescrip">
						

						<h6 className="cryptdetails"> Your Crypto wallet wherever you go. Connect your wallet <br /> and make an easy transfer.</h6>
					</div>

				</div>

				<div className="sendarea">
					{/*<h1> Send Crypto to other wallets </h1>

					{!currentAccount && (
							<button 
								type="button" 
								onClick={connectWallet}>

								<p> Connect wallet</p>
							</button>

					)}		*/}
					<div className="formsend"> 
						
						<h1> Send Crypto to other wallets </h1>

						{!currentAccount && (
							<button 
								type="button" 
								onClick={connectWallet} className="text-white">

								<p> Connect wallet</p>
							</button>

						)}		

						<div className="accountdetails">
						<p className="coinshere"> <FaCoins /> {currentBalance} </p>
						<p className="wallethere"> <FaWallet /> <span className="space"> </span>{shortenAddress(currentAccount)} </p>
						
						</div>
						<Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
				
						<Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
						<Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
						<Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
					
						<div className="loaderarea">
							{isLoading ? (
								<Loader />
								) : (
									<button type="button" className="text-white" onClick={handleSubmit}>Send now</button>

								)
							}

						</div>	
					</div>
				</div>	
		
		</div>

	);
};

export default Welcome;