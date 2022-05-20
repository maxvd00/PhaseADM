// import React from 'react'
import style from "./Tablehome.module.css";

export default function Tablehome() {
  return (
    <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 float-right top-36 right-0 absolute">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Laatste ...</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Krantenknipsel
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Max
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-green-600 dark:text-green-400">
                        €35
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Stickers
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Evander
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-red-600 dark:text-red-400">
                        -€52,30
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Drukkosten 
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Max
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-red-600 dark:text-red-400">
                        -€67,58
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            College Sweater Navy
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Max
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-green-600 dark:text-green-400">
                        €45,00
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Turk
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Evander
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-red-600 dark:text-red-400">
                        -€300,98
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
     
  );
}
