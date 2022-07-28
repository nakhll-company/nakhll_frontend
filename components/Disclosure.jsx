import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
function AppDisclosure({ title = "دسته بندی", children }) {
  return (
    <div className="w-full my-3">
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-2 py-2 font-bold text-gray-900 rounded-lg text-md hover:bg-gray-100 focus:outline-none focus-visible:ring ">
                <span>{title}</span>
                <ChevronDownIcon
                  className={`transition duration-300 ease-out    ${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default AppDisclosure;
