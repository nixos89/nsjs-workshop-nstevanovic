import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={{
            marginTop: '10px',
            borderTop: '3px solid cyan'
        }}>
            {children}
        </div>
    );
}

export default Layout;