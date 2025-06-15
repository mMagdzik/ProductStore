import { Button, Box } from "@chakra-ui/react";
import { Routes, Route, createPath } from "react-router-dom";


function App() {

  return (
    <Box minH={"100vh"}>
      {/* <Navbar> */}
      <Routes>
        <Route path = "/" element={ HomePage }/>
        <Route path = "/" element={ createPage }/>
      </Routes>
    </Box>
  )
}

export default App
