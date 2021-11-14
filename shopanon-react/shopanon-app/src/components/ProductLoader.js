import React from 'react';

function ProductLoading(Component) {
    return function ProductLoadingComponent({ isLoading, ...props }) {
        // if(!isLoading) return <Component {...props} />;
        return(
            <p>
                Hold up, products are loading...
            </p>
        );
    };
}

export default ProductLoading;