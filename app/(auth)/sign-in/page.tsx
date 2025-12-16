import { auth } from "@/lib/auth";
import AuthForm from "@/components/forms/AuthForm";

const SignIn = () => {
	return (
		<AuthForm
			mode={"sign_in"}
			defaultValues={{
				email: "",
				password: "",
			}}
		/>
	);
};

export default SignIn;
