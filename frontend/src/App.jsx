import Navbar from "./components/Navbar";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Authenticated users can access Profile */}
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />

        {/* Settings page is accessible by all users */}
        <Route path="/settings" element={<SettingsPage />} />

        {/* Public routes redirect to profile if already logged in */}
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/profile" />}
        />
        <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
        />
       </Routes>
      

      <Toaster />
    </div>
  );
};

export default App;
