import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AuthForm from "@/components/forms/AuthForm";

const SignUp = async () => {
	return (
		<main>
			<AuthForm
				mode={"sign_up"}
				defaultValues={{
					name: "",
					username: "",
					email: "",
					password: "",
				}}
			/>
		</main>
	);
};

export default SignUp;
