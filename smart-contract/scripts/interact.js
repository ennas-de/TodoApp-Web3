require("dotenv").config();
const hre = require("hardhat");
const {ethers} = require("ethers"); // ethers v6 have given me a lot of issues for Sepolia network, so I use ethers v5.7.0
const contract = require("./../artifacts/contracts/todo.sol/TodoApp.json");

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// Provider (a node (provider) that allows interaction (read and write access) to the blockchain)
const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_URL);

// Signer (this is the account that will be interacting with the blockchain (or has the right to sign transactions))
const signer = new hre.ethers.Wallet(PRIVATE_KEY, provider);

// TodoApp Contract (deployed) (this is the contract deployed to the blockchain, that we want to interact with. it is an Ethers.js object that is on-chain.)
const todoAppContract = new hre.ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

// get all todos
const getAllTodos = async () => {
    try {
        const todos = await todoAppContract.getAllTasks();
        console.log("Todos in the smart contract:", todos);
    } catch (error) {
        console.log("Error while fetching all todos:", error);
    }
}

// create new todo
const createTodo = async (todoDescription) => {
    try {
        await todoAppContract.createTask(todoDescription);
        console.log("New todo task created successfully.");
    } catch (error) {
        console.log("Error while adding new todo:", error);
    }
}

// delete todo
const deleteTodo = async (todoId) => {
    try {
        await todoAppContract.deleteTodo(todoId)
    } catch (error) {
        console.log("Error while deleting todo:", error);
    }
}

// lets run the functions
getAllTodos();
// createTodo("Hello Web3");
// deleteTodo(1);