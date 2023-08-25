import Web3 from 'web3';
declare global {
  interface Window {
    ethereum?: any;
  }
}

class MyApi{
  private etherum;
  private web3;
  private myContract;
  private contractABI

  constructor(etherum:any){
    this.etherum = etherum
    this.web3 = new Web3(this.etherum);
    this.contractABI = [
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
     this.myContract = new this.web3.eth.Contract(this.contractABI, this.contractAddress);
  }


 contractAddress = '0x59007DD4b9946ac26c4C07caCAEdbDb8baFc8F68';
 

 getBalance = async () => {
  console.log("asddddddddddasdassssssssssssssss")
  const balance = await this.myContract.methods.getBalance().call();
  console.log("asddddddddddasdassssssssssssssss",balance)
  return balance
}
getstatus = async () => {
  const status = await this.myContract.methods.Status().call();
  return status
}
getContractContent = async () => {
  const content = await this.myContract.methods.getContractContent().call();
  return content
}
getGiver = async () => {
  const giver = await this.myContract.methods.giver().call();
  return giver
}
getReceiver = async () => {
  const receiver = await this.myContract.methods.receiver().call();
  return receiver
}
getContractEndDate = async () => {
  const contract_end_date = await this.myContract.methods.contract_end_date().call();
  return contract_end_date
}
sendTransaction = async (senderAddress:any,contractAddress:any) => {
  const amount = this.web3.utils.toWei('0.1', 'ether');
  const transactionObject = {
    from: senderAddress,
    to: contractAddress,
    value: amount,
  };
  const contract_send = await this.web3.eth.sendTransaction(transactionObject);
  return contract_send
}
delivered = async () => {
  const delivered = await this.myContract.methods.delivered().send({from:'0x59007DD4b9946ac26c4C07caCAEdbDb8baFc8F68'});
  return delivered
}
recived = async () => {
  const delivered = await this.myContract.methods.accepted().send({from:'0x0c7F70F12b632548B59ADC6cCe467fad18b600D2'});
  return delivered
}


}

export default MyApi;