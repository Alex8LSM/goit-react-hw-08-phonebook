import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Copyright } from '@material-ui/icons';
import Loader from '../Loader/Loader';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';

import {
  getIsLoggedIn,
  getCurrentUser,
  getAuthError,
} from '../../redux/auth/authSelector';
import { getCurrent } from '../../redux/auth/authOperations';
import { Navigate } from 'react-router-dom';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../../page/HomePage' /* webpackChunkName: "home" */)
);
const AuthPage = lazy(() =>
  import('../../page/AuthPage' /* webpackChunkName: "auth" */)
);
const LoginPage = lazy(() =>
  import('../../page/LoginPage' /* webpackChunkName: "login" */)
);
const ContactsPage = lazy(() =>
  import('../../page/ContactsPage' /* webpackChunkName: "contacts" */)
);
export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const isError = useSelector(getAuthError);
  const isUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  if (isError)
    return (
      <div>
        <h1>Sorry, there is an error:</h1>
        <h1>{isError}</h1>
      </div>
    );
  return (
    <Section className={styles.sectionApp}>
      <Nav />
      {!isUser ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/register"
              element={!isLoggedIn ? <AuthPage /> : <Navigate to="/contacts" />}
            />

            <Route
              path="/login"
              element={
                !isLoggedIn ? <LoginPage /> : <Navigate to="/contacts" />
              }
            />

            <Route
              path="/contacts"
              element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </Suspense>
      ) : (
        <Loader />
      )}
      <div className={styles.footer}>
        <Copyright />
        Created by Alex8LSM | 2022
      </div>
    </Section>
  );
}
