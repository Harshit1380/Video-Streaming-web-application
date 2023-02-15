import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed} from './components';
const App = ()=>(
    <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/videos/:id" exact element={<VideoDetail />}/>
            <Route path="/channel/:id" exact lement={<ChannelDetail />}/>
            <Route path="/search/:searchterm" exact element={<SearchFeed />}/>
        </Routes>
    </Box>
    </BrowserRouter>
)

export default App;