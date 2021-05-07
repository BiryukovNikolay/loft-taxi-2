import React from 'react';

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const logIn = (email, password) => {
        if (email !== 'valid@email.com' || password !== 'correctpassword') {
            return
        }

        setIsLoggedIn(true);
    }

    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{logIn, logOut, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const widthAuth = (WrapperedComponent) => {
    return class extends React.Component {
        render() {
            return (<AuthContext.Consumer>
                {
                    (value) => {
                        return <WrapperedComponent {...value} {...this.props} />
                    }
                }
            </AuthContext.Consumer>)
        };
    }
}