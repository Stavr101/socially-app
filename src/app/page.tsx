import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/ui/ModeToggle";
export default function Page() {
  console.log("home page");

  return (
    <div className="p-6 items-center space-y-4">
      <h1 className="text-2xl font-bold">Home page content</h1>
      {/* <header className="flex justify-end items-center p-4 gap-4 h-16"> */}
      {/* <ModeToggle /> */}
      {/* <Show when="signed-out">
          <SignInButton>
            <button className="bg-green-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show> */}
      {/* </header> */}

      {/* <SignInButton />
      <UserButton />
      <Button>Primary</Button> */}
      {/* <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button> */}
    </div>
  );
}
