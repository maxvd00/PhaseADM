import React from "react";

export default function Social() {
  return (
    <div>
      <div class="p-4 max-w-sm h-112 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 float-left top-0 right-0">
        <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
          Connect wallet
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Connect with one of our available wallet providers or create a new
          one.
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Popular
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Coinbase Wallet
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Opera Wallet
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                WalletConnect
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
           
          </a>
        </div>
      </div>
    </div>
  );
}
