"use client";

import { Button } from "@/components/ui/button";
import { SignOut } from "@/lib/actions/auth-actions";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const Home = () => {
	const LogOutHandler = async () => {
		try {
			// const res = await SignOut();
			// if (res.success && res.redirectTo) {
			// 	toast.success("Logged out successfully.");
			// 	redirect(res.redirectTo)
			toast.success("Logged out successfully.");
			redirect("/auth/sign-in");
		} catch (err) {
			console.error("Error during sign-out", err);
			toast.error("Failed to log out. Please try again.");
		}
	};
	return (
		<main className=' h-screen flex flex-col flex-center'>
			<h2 className="h2-semibold font-space-grotesk">Welcome to TechFlow 👋</h2>
		<Button 
		className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 px-4 py-3.5"
		onClick={LogOutHandler}>Log out</Button>
		</main>
	);
};

export default Home;
