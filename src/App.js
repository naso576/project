import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar1 from "./scenes/global/Sidebar";
import Contacts from "./scenes/contacts";
import SignInSide from "./scenes/sign-in";
import SignUp from "./scenes/signup";
import PatientProfile from "./scenes/profiles";
import ManageProfile from "./scenes/manageprofiles";
import AddDetails from "./scenes/profiles/addComorbidities";
import HistoryPage1 from "./scenes//profiles/historyPage";
import HistoryPage2 from "./scenes/profiles/historyPage2";
import HistoryPage3 from "./scenes/profiles/historyPage3";
import HistoryPage4 from "./scenes/profiles/historyPage4";
import FinalPage from "./scenes/profiles/finalPage";
import ManageTemplates from "./scenes/templates";
import TabletsList from "./scenes/templates/tablets";
import Reminders from "./scenes/reminders";
import QueriesChat from "./components/chatbot/chatbot";
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar1 isSidebar={isSidebar} />
          <main className="main-content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/sign-in" element={<SignInSide/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/profiles" element={<PatientProfile/>}/>
              <Route path="/manageprofiles" element={<ManageProfile/>}/>
              <Route path="templates" element={<ManageTemplates/>}/>
              <Route path="/templates/tablets" element={<TabletsList/>}/>
              <Route path="reminders" element={<Reminders/>}/>
              <Route path="/profiles/addComorbidities" element={<AddDetails/>}/>
              <Route path="/profiles/historyPage" element={<HistoryPage1/>}/>
              <Route path="/profiles/historyPage2" element={<HistoryPage2/>}/>
              <Route path="/profiles/historyPage3" element={<HistoryPage3/>}/>
              <Route path="/profiles/historyPage4" element={<HistoryPage4/>}/>
              <Route path="/profiles/finalPage" element={<FinalPage/>}/>
            </Routes>
          </main>
       <div className="chatBox">
          <QueriesChat/>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
