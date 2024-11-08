import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../components/Widgets/NavComponent';
import Toolbar from '../../components/Home/components/Toolbar';
import { Button } from '@mui/material';

import {connectWallet, getConnectedWallet} from "./../../smart-contract/gateway/interact"


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function NavBar() {
  const [wallet, setWallet] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const getWallet = async () => {
      const resp = await getConnectedWallet();
      if (resp && typeof resp == "string") {
        // console.log({resp});
        setWallet(resp);
      } else {
        setWallet(null)
        setStatus(resp.status)
      }
    }

    getWallet();
  }, [])

  const addWalletListener = () => {
    if(window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts) {
          setWallet(accounts)
        } else {
          setWallet(null)
        }
      })
    } else {
      setWallet(null);
    }
  }

  const connectWalletPressed = async () => {
    try {
      const resp = await connectWallet();
      setWallet(resp.account);
      setStatus(resp.status);
  
      addWalletListener();
      console.log(resp.status);
      alert(resp.status)
    } catch (error) {
      console.log(error);
      setStatus(error.message);
      alert(error.message)
    }
  }

  return (
    <div>
     <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'todoapp'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => connectWalletPressed()}
              sx={rightLink}
            >
              { wallet ? (
                <p>{
                    String(wallet).substring(0,5) + 
                    "..." + 
                    String(wallet).substring(39)
                  }
                </p>
              ) : (
                <span>{'Connect Wallet'}</span>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {status & 
        <Box>{status}</Box>
      }
    </div>
  );
}

export default NavBar;
