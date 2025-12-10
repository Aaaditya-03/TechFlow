import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
	return (
		<div className="mt-10 flex flex-wrap gap-2.5">
			<Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5">
				<Image
					src="/icons/github.svg"
					alt="GitHub icon"
					width={20}
					height={20}
					className="object-contain invert-colors mr-2.5"
				/>
				<span className="ml-2.5">Continue with GitHub</span>
			</Button>
			<Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5">
				<Image
					src="/icons/google.svg"
					alt="GitHub icon"
					width={20}
					height={20}
					className="object-contain invert-colors mr-2.5"
				/>
				<span className="ml-2.5">Continue with Google</span>
			</Button>
		</div>
	);
};

export default SocialAuthForm;
