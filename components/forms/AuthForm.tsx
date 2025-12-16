"use client";

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignIn, SignUp } from "@/lib/actions/auth-actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface AuthFormProps {
	mode: "sign_in" | "sign_up";
	defaultValues: Record<string, string>;
}

const AuthForm = ({ mode, defaultValues }: AuthFormProps) => {
	const router = useRouter();
	const serverAction = mode === "sign_in" ? SignIn : SignUp;
	const [state, action, isPending] = useActionState(serverAction, {
		success: false,
	});

	useEffect(() => {
		if (state.success && state.redirectTo) {
			router.push(state.redirectTo);
		}
	}, [
		state,
		router,
	]);

	const buttonText = mode === "sign_in" ? "Sign In" : "Sign Up";

	return (
		<div className='mx-auto text-center'>
			<form action={action} className='mt-8 space-y-6'>
				<FieldSet>
					{Object.keys(defaultValues).map((field) => (
						<Field key={field}>
							<FieldContent className='flex flex-col gap-2.5 w-full'>
								<FieldLabel className='paragraph-medium text-dark400_light700' htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</FieldLabel>
								<Input
									id={field}
									name={field}
									className='paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border'
									type={field === "password" ? "password" : field === "email" ? "email" : "text"}
									required
									placeholder={field === 'email' ? 'johndoe@email.com' : field === 'password' ? '********' : `Enter your ${field}`}
								/>
							</FieldContent>	
						</Field>
					))}
					</FieldSet>
				<Button
					type="submit"
					disabled={isPending}
					className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900 "
					>
					{isPending ? buttonText === 'Sign In' ? 'Signing in...' : 'Signing up...' : buttonText} 
				</Button>
				{
					mode === 'sign_in' ? 
					(
						<p>Don't have an account ? {" "} 
							<span>
							<Link 
								className =' primary-text-gradient paragraph-semibold' 
								href='/sign-up'>Sign up
							</Link>
							</span>
						</p>
					) : 
					(
						<p>Already have an account? <span>
							<Link 
							className =' primary-text-gradient paragraph-semibold'
							href='/sign-up'>Sign in</Link>
						</span>
						</p>
					)
				}
			</form>
		</div>
	);
};

export default AuthForm;
