export const connectWallet = async () => {
    //check if the user's browser has an ethereum wallet installed
    if (window.ethereum) { 
        try {
            // get all the list of wallet addresses from the wallet
            const addresses = await window.ethereum.request({
                method: "eth_requestAccounts"
            })

            // return the first address from the list
            return {
                account: addresses[0],
                status: "Connection successful!"
            }
        } catch (error) {
            console.log(error)
            return {
                account: null,
                status: "You canceled the wallet connection request!"
            }; // the user can cancel our the connection request
        }
    } else { // if the user does not have a wallet installed
        console.log({error})
            return {
                account: null,
                status: "You must install an Ethereum wallet (e.g Metamask) in your Browser." 
            };
    }
}

export const getConnectedWallet = async () => {
    if (window.ethereum) {
        try {
            const addresses = await window.ethereum.request({
                method: "eth_accounts"
            });

            return addresses[0];
        } catch (error) {
            console.log({error});
            return false;
        }
    } else {
        return {
            address: null,
            status: "Install an Ethereum wallet (e.g Metamask) in your Browser."
        }
    }
}