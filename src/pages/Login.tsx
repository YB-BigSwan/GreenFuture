declare const google: any; 
import React, { useEffect, useState } from 'react';
import "../styles/login.css";

const Login: React.FC = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Listen for Google Identity responses
        const handleCredentialResponse = (response: any) => {
            verifyToken(response.credential);
        };

        // Verify the token from Google and update local storage and state accordingly
        const verifyToken = async (token: string) => {
            try {
                const response = await fetch('http://localhost:3001/api/verify-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });
                const data = await response.json();
                if (response.ok) {
                    const { name } = data;
                    setUserName(name); // Update local component state
                    localStorage.setItem('userInfo', JSON.stringify({ name })); // Store user info in local storage
                } else {
                    console.error('Error verifying token:', data.message);
                    setUserName('');
                    localStorage.removeItem('userInfo'); // Clear user info from local storage if error
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                setUserName('');
                localStorage.removeItem('userInfo'); // Clear user info from local storage if error
            }
        };

        // Setup Google Identity Services once the component loads
        window.onload = () => {
            if (typeof google !== 'undefined') {
                google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    callback: handleCredentialResponse
                });

                if (!userName) {
                    google.accounts.id.renderButton(
                        document.getElementById("g-signin2"),
                        { theme: "outline", size: "large" }
                    );
                }

                google.accounts.id.prompt(); // Display the One Tap prompt if user is not logged in
            }
        };
    }, [userName]); // Dependency on userName so the effect runs when userName changes

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <p>Login</p>
                {userName && <div>Welcome, {userName}</div>}
                {!userName && <div id="g-signin2"></div>}
            </div>
        </div>
    );
};

export default Login;
