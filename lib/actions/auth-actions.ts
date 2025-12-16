"use server";

import { auth } from "../auth";

type AuthActionState = {
	success: boolean;
	redirectTo?: string;
	error?: string;
};

export async function SignUp(
	prevState: AuthActionState,
	formdata: FormData
): Promise<AuthActionState> {
	const email = formdata.get("email") as string;
	const password = formdata.get("password") as string;
	const name = formdata.get("name") as string;
	// const username = formdata.get("username") as string;
	try {
		await auth.api.signUpEmail({
			body: {
				email,
				password,
				name,
			},
		});

		// Add username to your db here

		return {
			success: true,
			redirectTo: "/",
		};
	} catch (err) {
		console.error("Sign-up failed:", err);
		return {
			success: false,
			error: (err as Error).message,
		};
	}
}

export async function SignIn(
	prevState: AuthActionState,
	formdata: FormData
): Promise<AuthActionState> {
	const email = formdata.get("email") as string;
	const password = formdata.get("password") as string;
	try {
		await auth.api.signInEmail({
			body: {
				email,
				password,
			},
		});
		return {
			success: true,
			redirectTo: "/",
		};
	} catch (err) {
		console.error("Sign-in failed :", err);
		return {
			success: false,
			error: (err as Error).message,
		};
	}
}

export async function SignInSocial(provider: "github" | "google") {
	try {
		await auth.api.signInSocial({
			body: {
				provider,
				callbackURL: "/",
			},
		});
	} catch (err) {
		console.error("Social sign-in failed : ", err);
		return {
			success: false,
			error: (err as Error).message,
		};
	}
}

export async function SignOut() {
	try {
		await auth.api.signOut();
		return {
			success: true,
			redirectTo: "/sign-in",
		};
	} catch (err) {
		console.error("Sign-out failed :", err);
		return {
			success: false,
			errpr: (err as Error).message,
		};
	}
}
