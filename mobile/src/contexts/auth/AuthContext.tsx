import { createContext, type PropsWithChildren, useContext } from "react";
import { useAuth, type Auth } from "./useAuth";

const AuthContext = createContext<Auth | null>(null);

type Props = PropsWithChildren;

const AuthProvider = ({ children }: Props) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthContext");
    }

    return context;
}

export { AuthProvider, useAuthContext };