import React from 'react';
import "../styles/login.css";

interface GoogleUserProfile {
    getId(): string;
    getName(): string;
    getImageUrl(): string;
    getEmail(): string;
}

interface GoogleUser {
    getBasicProfile(): GoogleUserProfile;
    getAuthResponse(): { id_token: string };
}

interface BackendResponse {
    success: boolean;
    message: string;
}

const Login: React.FC = () => {
    const handleLogin = async (googleUser: GoogleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('Token: ' + googleUser.getAuthResponse().id_token);
        console.log('Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());

        try {
            const response = await fetch('YOUR_BACKEND_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: googleUser.getAuthResponse().id_token,
                    name: profile.getName(),
                    email: profile.getEmail(),
                }),
            });

            const data: BackendResponse = await response.json();
            console.log('Server response:', data);
        } catch (error) {
            console.error('Error posting user data', error);
        }
    };

    React.useEffect(() => {
        (window as any).gapi.signin2.render('g-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': handleLogin,
            'onfailure': (error: any) => console.log('Failed to login', error)
        });
    }, []);

    const handleSignInClick = () => {
        (window as any).gapi.auth2.getAuthInstance().signIn().then((googleUser: GoogleUser) => {
            handleLogin(googleUser);
        }, (error: any) => {
            console.log('Login failed', error);
        });
    };
    
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <p>Login</p>
                <div id="g-signin2" style={{ display: 'none' }}></div>
                <button className="custom-google-btn" onClick={handleSignInClick}>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
