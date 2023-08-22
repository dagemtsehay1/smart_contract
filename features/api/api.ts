import  { useState } from 'react';

import Web3 from 'web3';
declare global {
  interface Window {
    ethereum?: any;
  }
}
let web3 = new Web3(window.ethereum);
// const LoginForm = () => {
//   const [balance, setBalance] = useState()
//   const [bal, setBal] = useState<BigInt | undefined | [] | string | (unknown[] & [])>('')
 


  //block chain 
//   let web3 = new Web3(window.ethereum);

//   const contractAddress = '0x41b38bAC2cFA86260c0eD8F52c7D758657f5c862';
//   const [defaultAccount, setdefaultAccount] = useState(null)


//   const connectWallete = () => {
//     if (window.ethereum) {
//       window.ethereum.request({ method: 'eth_requestAccounts' }).then((result: any) => { accountChanged(result) })
//     }
//   }
//   const accountChanged = (accountName: any) => {
//     setdefaultAccount(accountName);
//     getUserBalance(accountName)

//   }
  export const getUserBalance = (accountAddress: any) => {
    // accountAddress ="0x0c7F70F12b632548B59ADC6cCe467fad18b600D2"
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] }).then((bal: any) => {
      const balanceWei = parseInt(bal, 16);
      const balanceEther = balanceWei / 10 ** 18;
      console.log('balanceEtherbalanceEtherbalanceEther ', balanceEther)
    //   setuserBalance(balanceEther)
      console.log('balanceWeibalanceWeibalanceWeibalanceWei ', balanceWei)
    })
  }
  getUserBalance("0x3bFA1DcBC2755278c611ECd418191521f8d78399")

  async function sendTransaction() {
    let params = [{
      from: "0x3bFA1DcBC2755278c611ECd418191521f8d78399",
      to: "0x1414cb409EC07Fb6480F4382957739C9b4Cbc26F",
      gas: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(2500000),
      value: web3.utils.toHex(1000000000000000),
    }]
    console.log('the paramsparamsparamsparams: ',params)

    let result = await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((error: any) => {
      console.log(error)
    })
    console.log('the result is : ',result)
  }
  sendTransaction()
//   return <h1>test</h1>;
// };



