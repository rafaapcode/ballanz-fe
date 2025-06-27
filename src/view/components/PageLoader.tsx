import { Transition } from "@headlessui/react";
import Logo from "./Logo";
import Spinner from "./Spinner";

interface LaunchScreenProps {
  isLoading: boolean;
}

function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-teal-800 fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Logo className="text-white h-10" />
          <Spinner className="text-teal-800 dark:text-teal-800 fill-white" />
        </div>
      </div>
    </Transition>
  );
}

export default LaunchScreen;
