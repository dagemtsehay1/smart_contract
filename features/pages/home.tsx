import { useEffect, useState } from 'react';
import Web3 from 'web3';
import MyApi from '../api/api';
// import { getBalance } from '../api/api';
declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function HomePage() {
  const [balance, setBalance] = useState<any>();
  const [content, setcontent] = useState<any>();
  const [status, setstatus] = useState<any>();
  const [giver, setgiver] = useState<any>();
  const [recevier, setrecevier] = useState<any>();
  const [contract_end_date, setcontract_end_date] = useState<any>();
  const myApi = new MyApi(window.ethereum)

  let web3 = new Web3(window.ethereum);
  const contractAddress = '0xC79bdEdb9495C2c9b5577D9b8B8d2C3AD5FBCCa6';
  const contractABI = [
    {
      "inputs": [],
      "name": "accepted",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "delivered",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "givendays",
          "type": "uint256"
        }
      ],
      "name": "setDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_giver",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    },
    {
      "inputs": [],
      "name": "content",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contract_end_date",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance1",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractContent",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "giver",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "manager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "payedcontractors",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "receiver",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Status",
      "outputs": [
        {
          "internalType": "enum EthioSmartContract.statusEnem",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  // const contractAddress = '0x8e12907FB0E52778f5B0b9E90198DeA1Adc08f19';
  // const contractABI = [
  //   {
  //     "inputs": [],
  //     "name": "accepted",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "delivered",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "givendays",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "setDate",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "_giver",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address payable",
  //         "name": "_receiver",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "stateMutability": "payable",
  //     "type": "receive"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "content",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "contract_end_date",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getBalance",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getBalance1",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getContractContent",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "giver",
  //     "outputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "manager",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "payedcontractors",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "receiver",
  //     "outputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "Status",
  //     "outputs": [
  //       {
  //         "internalType": "enum EthioSmartContract.statusEnem",
  //         "name": "",
  //         "type": "uint8"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   }
  // ];
  // const contractAddress = '0xcdCF7930cE3e12BF62108Ff5d456caF16196c6b9';
  // const contractABI = [
  //   {
  //     "inputs": [],
  //     "name": "accepted",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "num",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "add",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "delivered",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "givendays",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "setDate",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "_giver",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address payable",
  //         "name": "_receiver",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "stateMutability": "payable",
  //     "type": "receive"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "content",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "contract_end_date",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getBalance",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getBalance1",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getContractContent",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "giver",
  //     "outputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "manager",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "payedcontractors",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "receiver",
  //     "outputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "Status",
  //     "outputs": [
  //       {
  //         "internalType": "enum EthioSmartContract.statusEnem",
  //         "name": "",
  //         "type": "uint8"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   }
  // ];
  const myContract = new web3.eth.Contract(contractABI, contractAddress);
  /**
  methods that call the contracts status and getContent method and sets our status and content  states 
   * 
   */
  const caller = async () => {
    // console.log('llllllllllllllllllllll',await getBalance())
    console.log("fffffffffffffffffffffffffffffffffffffffttttttttttttttt",await myApi.getBalance())
  }
  useEffect(() => {
    caller()
  }, [])
  const CallContractApis = async (): Promise<BigInt | undefined | void | [] | (unknown[] & [])> => {
    try {
      const senderAddress = "0x0c7F70F12b632548B59ADC6cCe467fad18b600D2";
      const amount = web3.utils.toWei('0.1', 'ether');
      const transactionObject = {
        from: senderAddress,
        to: contractAddress,
        value: amount,
      };
      const balance = await myContract.methods.getBalance().call();
      const content = await myContract.methods.getContractContent().call();
      const status = await myContract.methods.Status().call();
      const giver = await myContract.methods.giver().call();
      const receiver = await myContract.methods.receiver().call();
      const delivered = await myContract.methods.delivered().call();
      console.log('delivereddelivereddelivereddelivereddelivereddelivereddelivereddelivered',delivered)
      // const delivered = await myContract.methods.rec().send();
      const date = BigInt(86400);
      // const setDate= await myContract.methods.setDate(date).send({from: contractAddress });
      const contract_end_date = await myContract.methods.contract_end_date().call();

      // const contract_send = await web3.eth.sendTransaction(transactionObject);
      // console.log(contract_send)
      setgiver(giver)
      setrecevier(receiver)
      setcontract_end_date(contract_end_date + '')
      setstatus(status?.toString())
      setcontent(content?.toString())
      setBalance(balance?.toString())
      // setstatus(contractStatus.toString())
      // setcontent(content + '')
      console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;', balance)
      console.log('contentcontentcontentcontentcontentcontentcontentcontentcontent', content)
      // console.log('delivereddelivereddelivereddelivereddelivereddelivereddelivereddelivereddelivered', delivered)
      console.log('contractStatuscontractStatuscontractStatuscontractStatuscontractStatus', status)
      console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttt', receiver)
      console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttt', giver)
      console.log('contract_end_datecontract_end_datecontract_end_datecontract_end_date', contract_end_date)
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  CallContractApis().then(() => {
  }).catch((error) => {
  });
  return <>
    <p>the balance is : {balance}</p>
    <p>the content is  : {content}</p>
    <p>the status is   : {status}</p>
    <p>the Receiver is   : {recevier}</p>
    <p>the Giver is   : {giver}</p>
    <p>the contract_end_date is   : {contract_end_date}</p>
    <h1>
      Home</h1>
    <button>clickme </button>
  </>

}
