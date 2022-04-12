import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';

const auth=getAuth(app)
const Products = () => {
    // const {user}=useFirebase();
    const [user]=useAuthState(auth);
    return (
        <div>
            <h3>This is products page</h3>
            <h3>knock knock ! who is there</h3>
            <h5>{user?user.displayName:'Voooooooot'}</h5>
        </div>
    );
};

export default Products;