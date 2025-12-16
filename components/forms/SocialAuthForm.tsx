"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";


const SocialAuthForm =() => {

	const handleSocialSignIn = async (provider : "github"  | "google") => {
		try {
			await authClient.signIn.social({
				provider,
				callbackURL : '/'
			})
		}catch(err) {
			console.error("Social sign-in failed : ", err);
			toast.error("Social sign-in failed. Please try again.");
		}
	}
	
	return (
    <div className="mt-7 flex flex-wrap gap-2.5">
        <Button
          type="button"
          className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 w-full px-4 py-3.5 flex-1"
		  onClick={() => handleSocialSignIn("github")}
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub icon"
            width={20}
            height={20}
            className="object-contain invert-colors mr-2.5"
          />
          Continue with GitHub
        </Button>

        <Button
          type="button"
          className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 w-full px-4 py-3.5 flex-1"
		   onClick={() => handleSocialSignIn("google")}
        >
          <Image
            src="/icons/google.svg"
            alt="Google icon"
            width={20}
            height={20}
            className="object-contain invert-colors mr-2.5"
          />
          Continue with Google
        </Button>
    </div>
  );
};

export default SocialAuthForm;
