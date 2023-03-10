const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require ("web3");
const {interface, bytecode} = require("./compile");

const provider = new HDWalletProvider("call glow acoustic vintage from ring trade assist shuffle mimic volume reject",
 "https://goerli.infura.io/v3/cdf3bad573a543558929b1e323df49b7"
 );

 const web3 = new Web3(provider);

 const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecote, arguments:["Hi there!"] })
    .send({gas: "1000000", from: accounts[0]});
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
 };
 deploy();