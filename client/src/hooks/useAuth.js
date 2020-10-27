import {useEffect, useState} from 'react';
import axios from 'axios';

const useAuth = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const getAuth = async () => {
            await axios.get('/api/current_user').then((result) => {
                setAuth(result);
              });
          };
          getAuth();
        }, []);

    return auth;
}

export default useAuth;