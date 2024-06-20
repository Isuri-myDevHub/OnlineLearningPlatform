import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Simulate authentication (replace with actual authentication logic)
        if (email === 'admin@codemaster.com' && password === 'admin123') {
            setUser({ email, role: email === 'admin@codemaster.com' ? 'admin' : 'student' });
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
