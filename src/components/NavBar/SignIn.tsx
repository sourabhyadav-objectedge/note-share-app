import { useRouter } from "next/router";
const SignIn = () => {
  const router = useRouter();
  const signInHandler: () => void = async () => {
    router.push("/api/auth/signin");
  };
  return (
    <div onClick={signInHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Log In</title>
        <path
          d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M288 336l80-80-80-80M80 256h272"
        />
      </svg>
      Sign in
    </div>
  );
};
export default SignIn;
