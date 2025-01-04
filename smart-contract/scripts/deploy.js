const hre = require("hardhat"); // import the hardhat module
require("dotenv").config(); // we can use this to import environmental variables

// function to deploy the smart contract to the network
const main = async () => {
    // this line of code gets the "TodoApp" smart contract.
    // the ethers.getCOntractFactory is used to prepare the contract for deployment by getting its bytecode and ABI
    const TodoApp = await hre.ethers.getContractFactory("TodoApp"); // check your smart contract codes again, you'll see we named the contract "TodoApp"

    // initializes the deployment process
    const todoApp = await TodoApp.deploy(); // create an object of the smart contract that has the deploy method activated

    // we await the deployment of the smart contract
    /// since the deployment of the smart contract returns a promise
    await todoApp.deployed(); 
    console.log("TodoApp deployed to:", todoApp.address); // we must console.log the contract address, else we won't be able to access the deployed smart contract
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // if the process completes successfully, we exit gracefully
    } catch (error) {
        console.log({error});
        process.exit(1); // if there's an error, the function exits with an error.
    }
}

runMain();