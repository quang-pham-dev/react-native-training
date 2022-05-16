import { useContext } from 'react';
import { AuthenticationContext } from 'context/AuthContext';

const useAuth = () => useContext(AuthenticationContext);

export default useAuth;
