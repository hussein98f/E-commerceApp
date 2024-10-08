import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage, AboutPage, ProductsPage, ProductPage } from "../pages";
import { Main } from "../pages/layouts";
import Login from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default router;

// {
/* import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import ContactPage from "../pages/Contact";
import ContributePage from "../pages/Contribute";
import RootLayout from "../pages/Layout";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import QuickStartPage from "../pages/learn";
import InstallationPage from "../pages/learn/Installation";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReactPage from "../pages/learn/ThinkingInReact";

const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;
<>
  {/* Root Layout */
// }
// <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
//   <Route index element={<HomePage />} />
//   <Route path="contact" element={<ContactPage />} />
//   <Route path="about" element={<AboutPage />} />
//   <Route
//      path="contribute"
//      element={
//        <ProtectedRoute
//          isAllowed={isLoggedIn}
//          redirectPath="/login"
//          data={userData}
//        >
//          <ContributePage />
//        </ProtectedRoute>
//      }
//    />     <Route
//      path="login"
//      element={
//        <ProtectedRoute
//          isAllowed={!isLoggedIn}
//          redirectPath="/contribute"
//          data={userData}
//        >
//          <LoginPage />
//        </ProtectedRoute>
//      }
//    />
//  </Route>

// {/* Learn Layout */}
// <Route path="/learn" element={<LearnLayout />}>
//   <Route index element={<QuickStartPage />} />
//   <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
//   <Route path="installation" element={<InstallationPage />} />
// </Route>

// {/* Page Not Found */}
// <Route path="*" element={<PageNotFound />} />
// </>; */}
