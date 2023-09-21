import './App.css';
import {Box} from '@chakra-ui/react';
import { BsArrowUpCircleFill } from "react-icons/bs";

import Main from './components/Main';

function App() {
  return (
    <Box
    className="App"
    background={"linear-gradient(#222c31, #111d32)"
    }
  >
    <Main/>
    <Box
          top="90vh"
          position="fixed"
          left={{
            base: "80%",
            sm: "80%",
            md: "93%",
            lg: "95%",
            xl: "95%",
            "2xl": "95%",
          }}
          zIndex="100"
          color={"  #42b2e6"}
          onClick={() => {
            window.scroll({
              top: 0,
              left: 100,
              behavior: "smooth",
            });
          }}
        >
          <BsArrowUpCircleFill size={"40px"} />

        </Box>
    </Box>
  );
}

export default App;
