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
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}verify-token`, {
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

        // Initialize and render Google Identity Services sign-in button
        const initGoogleSignIn = () => {
            if (typeof google !== 'undefined') {
                google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    callback: handleCredentialResponse
                });

                google.accounts.id.renderButton(
                    document.getElementById("g-signin2"),
                    { theme: "outline", size: "large" }
                );

                google.accounts.id.prompt(); // Always display the One Tap prompt
            }
        };

        initGoogleSignIn(); // Call this function when the component mounts
    }, [userName]); // Dependency on userName so the effect runs when userName changes

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <p>Login</p>
                <div id="g-signin2"></div> {/* This will now always display */}
                {userName && <div>Welcome, {userName}</div>}
            </div>
        </div>
    );
};

export default Login;
