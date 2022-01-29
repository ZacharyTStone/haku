import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Error from "./pages/Error";
import {
  browserRouter,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import AddJob from "./pages/Dashboard/AddJob";
import AllJobs from "./pages/Dashboard/AllJobs";
import Profile from "./pages/Dashboard/Profile";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import Stats from "./pages/Dashboard/Stats";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
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
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        {/* error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
