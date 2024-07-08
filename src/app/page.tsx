import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {LogInIcon} from "lucide-react"
import React from "react";

const Home = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSwitchSessionUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chat</Button>}
          </div>
          <p className="max-w-xl mt-2 text-lg text-slate-800">
            Jon millions of students, researchers ton instantly answer questions
            and understand research with AI
          </p>
          <div className="w-full mt-4">
            {isAuth? (<h1>FileUpload</h1>):(
              <Link href='/sign-in'>
              <Button>Login to get Started
               <LogInIcon className="w-4 h-4 ml-2"></LogInIcon>
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
