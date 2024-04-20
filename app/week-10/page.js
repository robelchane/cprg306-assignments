"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    console.log(user);
    
    return(
        <div className="bg-gray h-screen text-black">
            <h1 className="text-3xl font-bold mb-4 ml-4">Shopping List App</h1>
            <p className="font-bold m-4">
                {user? (
                    <button onClick={firebaseSignOut}>Sign Out
                        <p>Signed in as ({user?.email}).</p>                        
                        <p><Link href="week-8\shopping-list">Continue to your Shopping List</Link></p>
                    </button>
                    
                ):(
                    <button onClick={gitHubSignIn}>Sign In with GitHub</button>
                )}
            </p>
        </div>
    )

}