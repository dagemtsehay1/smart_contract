// import React, { useState } from 'react';
// import { Form, Input, Button, Card } from 'antd';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Web3 from 'web3';
// import { useAuth } from '../../shared/auth/use-auth';
// import { useNavigate } from 'react-router-dom';
// import checkTokenExpiration from '../../shared/auth/check-expiration';
// import Transcat from '../Transcat';
// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }
// const LoginForm = () => {
//   const { submitLoginRequest, session } = useAuth();
//   const [balance, setBalance] = useState()
//   const [bal, setBal] = useState<BigInt | undefined | [] | string | (unknown[] & [])>('')
//   const initialValues = {
//     username: '',
//     password: '',
//   };

//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       submitLoginRequest(values);
//     },
//   });
//   checkTokenExpiration()
//   //block chain 
//   let web3 = new Web3(window.ethereum);
//   // const provider = new Web3.providers.HttpProvider('http://remix.ethereum.org');
//   // const provider = new Web3.providers.HttpProvider('http://cors-anywhere.herokuapp.com/http://remix.ethereum.org');
//   // const web3 = new Web3(provider);
//   //  const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

//   // Rest of your code to interact with the contract

//   const contractAddress = '0x41b38bAC2cFA86260c0eD8F52c7D758657f5c862';
//   const contractABI = [
//     {
//       "inputs": [],
//       "name": "accepted",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "delivered",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address payable",
//           "name": "_giver",
//           "type": "address"
//         },
//         {
//           "internalType": "address payable",
//           "name": "_receiver",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "stateMutability": "payable",
//       "type": "receive"
//     },
//     {
//       "inputs": [],
//       "name": "getBalance",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "giver",
//       "outputs": [
//         {
//           "internalType": "address payable",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "manager",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "payedcontractors",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "receiver",
//       "outputs": [
//         {
//           "internalType": "address payable",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "Status",
//       "outputs": [
//         {
//           "internalType": "enum EthioSmartContract.statusEnem",
//           "name": "",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ];
//   // window.ethereum.enable()
//   //   .then(() => {
//   //   }).catch((error: any) => {
//   //     console.error('Error:', error);
//   //   });
//   // const myContract = new web3.eth.Contract(contractABI, contractAddress);
//   // const getAccounts = async () => {
//   //   const giver = await myContract.methods.giver().call();
//   //   const receiver = await myContract.methods.receiver().call();
//   //   const manager = await myContract.methods.manager().call();

//   //   console.log('givergivergivergivergiver givergivergivergiver : ', giver)
//   //   console.log('receiverreceiverreceiverreceiverreceiverreceiverreceiver : ', receiver)
//   //   console.log('managermanagermanagermanagermanagermanagermanagermanager : ', manager)

//   // }
//   // const getBal = async (): Promise<BigInt | undefined | void | [] | (unknown[] & [])> => {
//   //   try {


//   //     const balance = await myContract.methods.getBalance().call();

//   //     return balance;
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     throw error;
//   //   }
//   // };
//   // const deposit = async (): Promise<void | [] | (unknown[] & [])> => {
//   //   try {
//   //     const amount = 2;
//   //     const giver = await myContract.methods.giver().call();
//   //     console.log('giver giver giver giver giver giver giver giver giver giver ', giver + '')
//   //     const result = await myContract.methods.deposit().send({
//   //       from: giver + '',
//   //       value: web3.utils.toWei(amount.toString(), 'ether'), // Convert amount to wei
//   //     });
//   //     console.log('resultresultresultresultresultresultresultresultresult')
//   //     console.log('the found result of the transaction is : ', result)
//   //   } catch (error) {
//   //    console.log(error)
//   //   }
//   //   // return result;
//   // }
//   // const deposit = async (amount:any, giver:any): Promise<void | [] | (unknown[] & [])>  => {
//   //   console.log('amountamountamountamountamount ',amount)
//   //   console.log('givergivergivergivergivergiver ',giver)
//   //   console.log('contractAddresscontractAddresscontractAddress ',contractAddress)
//   //   const gasPrice = await web3.eth.getGasPrice();
//   //   const multipliedGasPrice = Number(gasPrice) * 2
//   //   console.log('multipliedGasPricemultipliedGasPricemultipliedGasPrice ',multipliedGasPrice)

//   //   try {
//   //     // Call the deposit method
//   //     await  web3.eth.sendTransaction({
//   //       from:giver.trim(),
//   //       to: contractAddress,
//   //       value: web3.utils.toWei(amount.toString(), 'ether'), // Convert amount to wei
//   //       gasPrice: multipliedGasPrice
//   //     });

//   //     // Transaction successful
//   //     console.log('Deposit successful!');
//   //   } catch (error) {
//   //     // Handle error
//   //     console.error('Deposit failed:', error);
//   //   }
//   // };

//   // const fetchBal = async () => {
//   //   try {
//   //     const balance = await getBal();
//   //     const accs: any = await getAccounts()
//   //     const amount = 1;
//   //     const giver = await myContract.methods.giver().call();
//   //     console.log('giver giver giver giver giver giver giver giver giver giver ', giver + '')
//   //     // await deposit(amount,giver+'')
//   //     // console.log('the Zeros thhhhheeee acount is : ',accs[0])
//   //     if (balance !== undefined) {
//   //       setBal(balance.toString());
//   //     }
//   //   } catch (error) {
//   //     // Handle the error if needed
//   //   }
//   // };

//   // Call the fetchBal function to fetch the balance and update the state
//   // fetchBal().then(() => {
//   //   // Do something after the balance is fetched and state is updated
//   // }).catch((error) => {
//   //   // Handle any errors that occur during the process
//   // });;

//   const [errorMessage, setErrorMessage] = useState(null)
//   const [defaultAccount, setdefaultAccount] = useState(null)
//   const [userBalance, setuserBalance] = useState(Number)

//   const connectWallete = () => {
//     if (window.ethereum) {
//       window.ethereum.request({ method: 'eth_requestAccounts' }).then((result: any) => { accountChanged(result) })
//     }
//   }
//   const accountChanged = (accountName: any) => {
//     setdefaultAccount(accountName);
//     getUserBalance(accountName)

//   }
//   const getUserBalance = (accountAddress: any) => {
//     // accountAddress ="0x0c7F70F12b632548B59ADC6cCe467fad18b600D2"
//     window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] }).then((bal: any) => {
//       const balanceWei = parseInt(bal, 16);
//       const balanceEther = balanceWei / 10 ** 18;
//       console.log('balanceEtherbalanceEtherbalanceEther ', balanceEther)
//       setuserBalance(balanceEther)
//       console.log('balanceWeibalanceWeibalanceWeibalanceWei ', balanceWei)
//     })
//   }
//   getUserBalance("0x3bFA1DcBC2755278c611ECd418191521f8d78399")

//   async function sendTransaction() {
//     let params = [{
//       from: "0x3bFA1DcBC2755278c611ECd418191521f8d78399",
//       to: "0x1414cb409EC07Fb6480F4382957739C9b4Cbc26F",
//       gas: web3.utils.toHex(21000),
//       gasPrice: web3.utils.toHex(2500000),
//       value: web3.utils.toHex(1000000000000000),
//     }]
//     console.log('the paramsparamsparamsparams: ',params)

//     let result = await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((error: any) => {
//       console.log(error)
//     })
//     console.log('the result is : ',result)
//   }
//   sendTransaction()
//   return (

//     <>
//       <Card className='text-center mx-auto mx-72 w-50 mt-10'>
//         <p>the balance is : {userBalance}</p>

//         <div className="flex flex-col items-center">
//           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Login</h1>
//         </div>
//         <div className="p-4 w-50 mx-auto flex ">
//           <div className='w-1/3'>
//             <img src="/4957136.jpg" alt="login Image" />
//           </div>
//           <div className='mt-20 w-2/3'>
//             {/* <form onSubmit={sendTransaction}>
//               <Form.Item>
//                 <Button type="primary" className='text-white bg-primary' htmlType="submit">
//                   deposit
//                 </Button>
//               </Form.Item>
//             </form> */}
//             <Form layout="vertical" className='w-2/3' onFinish={formik.handleSubmit}>
//               <Form.Item
//                 label="Email"
//                 name="username"
//                 validateStatus={formik.errors.username ? 'error' : ''}
//                 help={formik.errors.username}
//               >
//                 <Input value={formik.values.username} onChange={formik.handleChange} />
//               </Form.Item>
//               <Form.Item
//                 label="Password"
//                 name="password"
//                 validateStatus={formik.errors.password ? 'error' : ''}
//                 help={formik.errors.password}
//               >
//                 <Input.Password value={formik.values.password} onChange={formik.handleChange} />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" className='text-white bg-primary' htmlType="submit">
//                   Sign in
//                 </Button>
//               </Form.Item>

//             </Form>
//           </div>

//         </div>
//       </Card></>
//   );
// };

// export default LoginForm;
