import { ReactNode } from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { auth } from "@/lib/auth";
import AuthForm from "@/components/forms/AuthForm";
import { headers } from "next/headers";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<main className="bg-auth-light dark:bg-auth-dark flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center px-4 py-10">
			<section className="light-border background-light800_dark200 shadow-light-100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
				<div className="flex items-center justify-between mb-8 gap-2 ">
					<div className="space-y-2.5">
						<h1 className="h2-bold text-dark100_light900">Join TechFlow</h1>
						<p className="paragraph-regular text-dark-500_light-400">
							To get your questions answered
						</p>
					</div>
					<Image
						src="/images/site-logo.svg"
						alt="TechFlow logo"
						width={50}
						height={50}
						className="object-contain"
					/>
				</div>

				{children}
				<SocialAuthForm />
			</section>
		</main>
	);
};

export default AuthLayout;
