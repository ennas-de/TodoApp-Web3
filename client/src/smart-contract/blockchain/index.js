import Web3 from 'web3';
// import dotenv from 'dotenv';
import contractABI from './contract-abi.json';
import {getConnectedWallet} from "./../gateway/interact"

// dotenv.config();

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
// console.log({CONTRACT_ADDRESS});

const web3 = new Web3(window.ethereum);

const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

// createTask(taskDescription)
export const createTodo = async (taskDescription) => {
    try {
        const account = await getConnectedWallet(); //get currently connected wallet
        const gasFee = await contract.methods.createTask(taskDescription).estimateGas({
            from: account
        }) // we need to calculate a gas fee to use for the call since the function will change the state of the blockchain, hence, we will be required to pay gas fee

        // we will call the `createTask` method of the smart contract. 
        // we are using the method `SEND` here as this method is expected to change the blockchain state
        await contract.methods.createTask(taskDescription).send({
            from: account,
            gas: gasFee
        })

        console.log(`New Task created successfully!`)
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

//  completeTask(taskId)
export const completeTodo = async (taskId) => {
    try {
        const account = await getConnectedWallet();
        const gasFee = await contract.methods.completeTask(taskId).estimateGas({
            from: account
        })

        await contract.methods.completeTask(taskId).send({
            from: account,
            gas: gasFee
        })

        console.log(`New Task created successfully!`)
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

// deleteTask(taskId)
export const deleteTodo = async (taskId) => {
    try {
        const account = await getConnectedWallet();
        const gasFee = await contract.methods.deleteTask(taskId).estimateGas({
            from: account
        })

        await contract.methods.deleteTask(taskId).send({
            from: account,
            gas: gasFee
        })

        console.log(`Task deleted successfully!`)
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

// getTask(taskId)
export const getTodo = async (taskId) => {
    try {
        // we will call the `getTask` method of the smart contract. 
        // we are using the method `CALL` here as this method is not expected to change the blockchain state, hence, we are not to pay gas fee.
        const todo = await contract.methods.getTask(taskId).call()

        return todo
    } catch (error) {
        console.log(error);
        return false
    }
}

// getAllTasks
export const getAllTodos = async () => {
    try {
        const todos = await contract.methods.getAllTasks().call()

        return todos
    } catch (error) {
        console.log(error);
        return false
    }
}