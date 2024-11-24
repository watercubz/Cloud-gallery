import { Github } from '@react-symbols/icons';
import { FaGoogle } from 'react-icons/fa';
import useAuthSession from '../../../hooks/useAuthSession';

export default function AuthComponent() {
  const { handleLoginGithub, handleLoginGoogle } = useAuthSession();

  return (
    <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
      <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
        <a className="mt-10 w-fit text-zinc-950 dark:text-white" href="/">
          <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 320 512"
              className="mr-3  h-[15px] w-[12px] text-zinc-950 dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
          </div>
        </a>
        <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
          <p className="text-[32px] font-bold text-zinc-950 dark:text-white">
            Sign In
          </p>
          <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
            Sign in with google or github!
          </p>
          <div className="mt-8 pb-2">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  disabled:opacity-50 border border-input hover:bg-gray-300 hover:text-black hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white m-1"
              onClick={handleLoginGoogle}
            >
              <FaGoogle className="mr-3 h-6 w-6" /> Google
            </button>

            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  disabled:opacity-50 border border-input hover:bg-gray-300 hover:text-black hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white m-1"
              onClick={handleLoginGithub}
            >
              <Github className="mr-3 h-8 w-8" /> Github
            </button>
          </div>
          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
              <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
            </div>
          </div>
          <div>
            <form className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    className="text-zinc-950 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={true}
                    name="email"
                  />
                  <label
                    className="text-zinc-950 mt-2 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    disabled={true}
                    type="password"
                    autoComplete="current-password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    name="password"
                  />
                </div>
                <button
                  className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                  type="button"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p>
              <a
                href="#"
                className="font-medium text-zinc-950 dark:text-white text-sm"
              >
                Forgot your password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
