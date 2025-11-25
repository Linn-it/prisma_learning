import { House, Sprout } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import SignIn from "./SignIn";
import { currentUser } from "@clerk/nextjs/server";

export default async function Navbar () {

    const user = await currentUser();

    return (
        <>
            <nav className="sticky top-0 border-b border-border h-12 bg-background/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center max-w-7xl mx-auto mt-4">
                    <div>
                        <h2 className="font-serif font-bold text-2xl flex items-center text-primary">
                           <Sprout className="mr-1"/> Plantventory
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
                        <Link href="/plants" className="flex text-primary hover:text-primary/60 transition-colors duration-200"><Sprout size={20} className="mr-1"/>Plants</Link>
                        <Link href="/home" className="flex text-primary hover:text-primary/60 transition-colors duration-200"><House size={20} className="mr-1"/> Home</Link>
                        <ModeToggle/>
                        <div>
                            <SignedOut>
                                <SignIn/>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}