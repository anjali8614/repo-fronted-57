import { lazy , Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Login from './components/Login';
//import Dashboard from './components/Dashboard';
//import AddUser from './components/AddUser';
//import EditUser from './components/EditUser';
import './App.css';
import AuthRoute from './AuthRote';

const Login = lazy(()=>import ('./components/Login')) 
const Dashboard = lazy(()=>import ('./components/Dashboard')) 
const AddUser = lazy(()=>import ('./components/AddUser')) 
const EditUser = lazy(()=>import ('./components/EditUser'))


function App() {
  return (
    <Suspense fallback={<div className="loading" > ...Loading </div>}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
      <Route path="addUser" element={<AuthRoute><AddUser /></AuthRoute>} />
      <Route path="edit-user/:id" element={<AuthRoute><EditUser /></AuthRoute>} />
    </Routes>
    </Suspense> 
  );
}

export default App;
