import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const {user}=useFirebase();
    return (
        <div>
            <h3>This is products page</h3>
            <h3>knock knock ! who is there</h3>
            <h5>{user?user.displayName:'Voooooooot'}</h5>
        </div>
    );
};

export default Products;