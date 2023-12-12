<template>
  <section>
    <!-- Content -->
    <div class="relative">
      <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <ul class="mt-16 space-y-5">
          <!-- Chat Bubble -->
          <li class="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
            <div class="grow text-end space-y-3">
              <!-- Card -->
              <div class="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                <p class="text-sm text-white">what's tailwindcss?</p>
              </div>
              <!-- End Card -->
            </div>

            <span
              class="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600"
            >
              <span class="text-sm font-medium text-white leading-none"
                >AZ</span
              >
            </span>
          </li>
          <!-- End Chat Bubble -->

          <!-- Chat Bubble -->
          <li class="flex gap-x-2 sm:gap-x-4">
            <svg
              class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="6" fill="#2563EB" />
              <path
                d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div
              class="grow max-w-[90%] md:max-w-sm w-full space-y-3 border border-gray-200 rounded-lg p-2"
            >
              <!-- Card -->
              <div class="bg-white p-4 space-y-3">
                <p class="text-sm text-gray-800 dark:text-white">
                  Here you go...
                </p>
              </div>
              <!-- End Card -->

              <div class="aspect-w-20 aspect-h-12 rounded-md">
                <img
                  class="w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                  alt="Deep Learning"
                />
              </div>

              <!-- Button Group -->
              <div>
                <div class="sm:flex sm:justify-between">
                  <div>
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        class="flex-shrink-0 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share
                    </button>
                  </div>

                  <div class="mt-1 sm:mt-0">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        class="h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path
                          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                        />
                      </svg>
                      New answer
                    </button>
                  </div>
                </div>
              </div>
              <!-- End Button Group -->
            </div>
          </li>
          <!-- End Chat Bubble -->
        </ul>
      </div>

      <!-- Search -->
      <div
        class="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-slate-900 dark:border-gray-700"
      >
        <!-- Input -->
        <div class="relative">
          <textarea
            class="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Ask me anything..."
          ></textarea>

          <!-- Toolbar -->
          <div
            class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900"
          >
            <div class="flex justify-end items-center">
              <button
                type="button"
                class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  class="flex-shrink-0 h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- End Toolbar -->
        </div>
        <!-- End Input -->
      </div>
      <!-- End Search -->
    </div>
    <!-- End Content -->
  </section>
</template>
