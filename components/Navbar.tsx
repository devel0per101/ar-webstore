"use client"    // Tells Next.js this component uses client-side features.

import { useClerk } from "@clerk/nextjs";   // Gets the function to handle user login and sign-out.
import { UserButton, useUser } from "@clerk/nextjs";   // Gets tools to manage user info and show the user button.
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"  // Gets icons for user, menu, and shopping cart.
import Image from "next/image" // Imports Image component for displaying optimized images.
import Link from "next/link"  // Imports Link for navigation between pages.
import { useState } from "react";  // Imports useState to manage the state of the dropdown menu.

const Navbar = () => {   
    const { user } = useUser();      // Gets the current user information from Clerk.

    const [dropdownMenu, setDropdownMenu] = useState(false);      // Manages the state for showing/hiding the dropdown menu.

    const { signOut } = useClerk();      // Gets the signOut function to log the user out.

    const handleSignOut = async () => {
        await signOut();  // Sign out the user
        window.location.href = "/sign-in"; // Redirect after sign-out
    };

    return (
        <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white"> {/* Creates the navbar with space between the items */}
            <Link href="/"> {/* Links to the homepage */}
                <Image src="/logo.png" alt="logo" width={130} height={100} />  {/* Displays the logo */}
            </Link>

            <div>
                <Link href="/">Home</Link>   {/* Links to the homepage */}

            </div>

            <div className="relative flex gap-3 items-center">     {/* Creates space for cart and user icons */}
                <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"> {/* Links to the cart page */}  
                    <ShoppingCart />   {/* Shopping cart icon */}
                    <p className="text-base-bold">Cart (0)</p>  {/* Displays the cart text */}
                </Link>

                {user && (<Menu className="cursor-pointer" onClick={() => setDropdownMenu(!dropdownMenu)} />)} {/* If user is logged in, show the menu icon */}


                {user && dropdownMenu && (
                    <div className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg border bg-white text-base-bold">  {/* Shows a dropdown with links when the menu is clicked */}
                        <Link href="/wishlist" className="hover:text-red-1">Wishlist</Link>  {/* Link to the user's wishlist */}
                        <Link href="/orders" className="hover:text-red-1">Orders</Link>      {/* Link to the user's orders */}
                    </div>
                )}

                {user ? (
                    <button onClick={handleSignOut}> {/* Shows sign-out button if user is logged in */}
                        <UserButton />
                    </button>
                ) : (
                    <Link href="/sign-in">  {/* Links to the sign-in page if no user is logged in */}
                        <CircleUserRound />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;  // Makes the Navbar component available for use.
