import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import AddJob from "./pages/Dashboard/AddJob";
import AllJobs from "./pages/Dashboard/AllJobs";
import Stats from "./pages/Dashboard/Stats";
import Profile from "./pages/Dashboard/Profile";
import Tools from "./pages/Dashboard/Tools";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import RegisterDemo from "./pages/RegisterDemo";
import Helmet from "helmet";

function App() {
  return (
    <main>
      <Helmet>
        <meta
          name="description"
          content="Haku pronounced 'ha koo' is an application that let's you track, and compare jobs during the the interview process."
        />
        <meta itemprop="name" content="HAKU" />
        <meta
          itemprop="description"
          content="Haku pronounced 'ha koo' is an application that let's you track, and compare jobs during the the interview process."
        />
        <meta
          itemprop="image"
          content="https://www.hakujobs.com/static/media/thumb1.4b20650f.png"
        />

        <meta property="og:url" content="https://www.hakujobs.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HAKU" />
        <meta
          property="og:description"
          content="Haku pronounced 'ha koo' is an application that let's you track, and compare jobs during the the interview process."
        />
        <meta
          property="og:image"
          content="https://www.hakujobs.com/static/media/thumb1.4b20650f.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HAKU" />
        <meta
          name="twitter:description"
          content="Haku pronounced 'ha koo' is an application that let's you track, and compare jobs during the the interview process."
        />
        <meta
          name="twitter:image"
          content="https://www.hakujobs.com/static/media/thumb1.4b20650f.png"
        />
      </Helmet>
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
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/register-demo" element={<RegisterDemo />} />
          <Route index path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
