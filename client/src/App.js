import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import AddJob from "./pages/Dashboard/AddJob";
import Todo from "./pages/Dashboard/Todo";
import AllJobs from "./pages/Dashboard/AllJobs";
import Stats from "./pages/Dashboard/Stats";
import Profile from "./pages/Dashboard/Profile";
import Tools from "./pages/Dashboard/Tools";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import RegisterDemo from "./pages/RegisterDemo";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import AdSense from 'react-adsense';

function App() {
  return (
    <HelmetProvider>
      {/* <AdSense.Google
  client='ca-pub-2495439414515461'
  slot={process.env.REACT_APP_ADSENSE_SLOT}
/> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="tools" element={<Tools />} />
            <Route path="profile" element={<Profile />} />
            <Route path="todo" element={<Todo />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/register-demo" element={<RegisterDemo />} />
          <Route index path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
