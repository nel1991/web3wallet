import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import styled from 'styled-components';



const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount }) => {


					return (

							<>
									<tr>
										<td>
												<a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
													<p className=""> To: {shortenAddress(addressTo)}  </p>

												 </a>

										</td>
										<td>
											<a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
												<p className=""> From: {shortenAddress(addressFrom)}  </p>

											 </a>											
										</td>
										<td>{amount} ETH</td>
										<td>
											
											{message && (
								 		<>
								 	

								 		<p> {message} </p>
								 		</>
								 		)}


										</td>
										<td>{timestamp}</td>
										
									</tr>
							</>
					)			

}
const Transactions = () => {

	const { currentAccount, transactions } = useContext(TransactionContext);

	return (
		<DivisionOne>

					<DivisionTwo>

				
			
				
          </DivisionTwo>

     		<TableArea>
     			
     			<TransValidation>
		     			{currentAccount ? (
							<h3 className="latest">Latest Transactions</h3>
						) : ( <h3 className="">Connect account to see the recent Transactions</h3>
						)}
					{/*	Latest Transactions
						Connect account to see the recent Transactions*/}
				</TransValidation>


				<TableBod>
					<table className="tablehere">
	     				  <tbody>
					        <tr>
					          <th>Address To</th>
					          <th>Address From</th>
					          <th>Amount</th>
					          <th>Message </th>
					          <th>Timestamp </th>
					        </tr>
					        
					 
							{transactions.reverse().map((transaction, i) => (
								<TransactionCard key={i} {...transaction} />
							))}

							</tbody>

					</table>	
				    
				  </TableBod>  
				   					
			</TableArea>     

				
             
           
		</DivisionOne>	

		
	)
}

export default Transactions;

const DivisionOne = styled.div`
  background: rgb(34,120,240);
  background: linear-gradient(90deg, rgba(34,120,240,1) 11%, rgba(85,55,217,1) 100%);
  display: flex;
  flex-wrap: wrap;


`

const DivisionTwo = styled.div`

/*	margin-top: 20px;
	margin-bottom: 20px;

	background-color:yellow;*/

	display: flex;	
	flex: 0.3;
	margin-top: 50px; 



`

const TableArea = styled.div`
	
	display: flex;	
	flex: .5;
	margin-top: 50px; 
	flex-direction: column;
	margin-bottom: 50px;
	background-color: white;
	border-radius: 10px;



`

const TableBod = styled.div`

	display: flex;
	margin-left: 50px;
	margin-bottom:50px;
	margin-top: 30px;


`

const TransValidation = styled.div`
	display: flex;
	justify-content:center;
	margin-top: 50px;




`