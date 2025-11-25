import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function SignIn() {
    return (
        <>
        <SignInButton>
            <Button variant='ghost' className="cursor-pointer text-primary hover:text-primary/60"><LogIn/> Sign in</Button>
        </SignInButton>
        </>
    )
}