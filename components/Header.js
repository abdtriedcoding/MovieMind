import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white sticky z-50 top-0">
      {/* Mobile menu Sidemenu*/}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t border-gray-200  px-4 py-4">
                  <div className="flow-root">
                    <Link
                      onClick={() => setOpen(false)}
                      href="https://github.com/Abdullah-SoftDev/MovieMind"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Github
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      onClick={() => setOpen(false)}
                      href="https://twitter.com/Sidddabdullah"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Twitter
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Mobile and laptop menu */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex p-4 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Link href="/">
                <div className="ml-4 flex lg:ml-0 flex-1">
                  <span className="sr-only">Company</span>
                  <img className="h-8 w-auto" src="/logo.png" alt="image" />
                </div>
              </Link>

              {/* Right Part */}
              <div className="ml-auto flex items-center">
                <div className="space-x-3 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="https://github.com/Abdullah-SoftDev/MovieMind"
                    className="text-lg font-medium text-gray-500 hover:text-gray-800"
                  >
                    Github
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    href="https://twitter.com/Sidddabdullah"
                    className="text-lg font-medium text-gray-500 hover:text-gray-800"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Nav component */}
      <Nav />
    </div>
  );
};

export default Header;
