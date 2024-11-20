"use client"

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import googleLogo from '@/public/googleLogo.svg'
import githubLogo from '@/public/githubLogo.svg'
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function GoogleAuthButton() {
    const {} = useFormStatus()


        const [pending, setPending] = useState(false);


        const { pending: formPending } = useFormStatus();
    

        const isPending = formPending || pending; // 

    return (
        <>
            { isPending ? (
                    <Button disabled variant="outline" className="w-full">
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    </Button>
                ) : (
                    <Button variant="outline" className="w-full">
                        <Image src={googleLogo} alt="googleLogo" className="size-4 mr-2"/>
                        Sign in with Google
                    </Button>
                )}
        </>
    )
}

export function GithubAuthButton() {
    const {} = useFormStatus()


        const [pending, setPending] = useState(false);


        const { pending: formPending } = useFormStatus();
    

        const isPending = formPending || pending; // 

    return (
        <>
            { isPending ? (
                    <Button disabled variant="outline" className="w-full">
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    </Button>
                ) : (
                    <Button variant="outline" className="w-full">
                        <Image src={githubLogo} alt="githubLogo" className="size-4 mr-2"/>
                        Sign in with Github
                    </Button>
                )}
        </>
    )
}