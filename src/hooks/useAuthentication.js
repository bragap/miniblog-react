import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    // cleanup
    // deal with memory leaks
    const [cancelled, setCancelled] = useState(false)
    
    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            throw new Error('cancelled')
        }
    }
    
}