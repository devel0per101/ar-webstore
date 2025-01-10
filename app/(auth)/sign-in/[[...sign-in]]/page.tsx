import { SignIn } from "@clerk/nextjs"; // Importing the SignIn component from Clerk's Next.js library for authentication.

export default function Page() {   // Creates the main page of this file.

  return (
    <div className="h-screen flex justify-center items-center">  {/* Makes a full-screen area and centers everything inside it */}
      <SignIn />  {/* Shows the login form */}
    </div>
  );
}
