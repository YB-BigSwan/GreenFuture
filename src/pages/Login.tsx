declare const google: any; 

import React, { useEffect, useState } from 'react';
import "../styles/login.css";

const Login: React.FC = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const handleCredentialResponse = (response: any) => {
            console.log("Encoded JWT ID token: " + response.credential);

            verifyToken(response.credential);
        };

        const verifyToken = async (token: string) => {
            try {
                const response = await fetch('http://localhost:3001/api/verify-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });
                const data = await response.json(); // Moved this line inside the try block
                if (response.ok) {
                    const { name } = data;
                    setUserName(name); // Update the state to reflect the user's name
                } else {
                    console.error('Error verifying token:', data.message); // Log backend provided message
                    setUserName(''); // Reset username if there is an error
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                setUserName(''); // Reset username on fetch error
            }
        };
        
        // Initialize the Google Identity Services library
        window.onload = () => {
            if (typeof google !== 'undefined') {
                google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    callback: handleCredentialResponse
                });

                google.accounts.id.renderButton(
                    document.getElementById("g-signin2"), // Ensure this element exists
                    { theme: "outline", size: "large" }  // Customization attributes
                );

                google.accounts.id.prompt(); // Display the One Tap prompt
            }
        };
    }, []);

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <p>Login</p>
                {userName && <div>Welcome, {userName}</div>}
                <div id="g-signin2"></div>
            </div>
        </div>
    );
};

export default Login;
