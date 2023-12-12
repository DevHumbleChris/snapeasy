<script setup>
import Chat from "~/components/global/Chat.vue";
import { Button } from "~/components/ui/button";
const selectedView = useState("selectedView", () => "default");

const setSelectedView = (viewType) => {
  selectedView.value = viewType;
};
</script>

<template>
  <div
    class="flex flex-col-reverse sm:grid sm:grid-cols-2 p-5 sm:p-10 gap-20 mt-4 sm:items-center"
  >
    <div v-if="selectedView === 'bot'" class="border p-2 rounded-md shadow-lg">
      <Chat />
    </div>
    <div
      v-if="selectedView === 'default'"
      class="relative border p-2 rounded-md shadow-lg"
    >
      <Button class="absolute w-56 text-right top-5 right-5">
        <Icon
          name="solar:gallery-download-line-duotone"
          class="h-3.5 w-3.5 mx-2"
        />
        Download
      </Button>

      <img
        className="object-cover w-full rounded-xl h-full"
        src="https://www.screenia.best/images/themeptation-screenshot.png"
        :alt="'screenia screenshot of' + webUrl"
      />
    </div>
    <div class="space-y-4">
      <button
        type="button"
        @click="setSelectedView('default')"
        class="text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl"
        :class="{
          'bg-white shadow-md hover:border-transparent':
            selectedView === 'default',
        }"
        id="tabs-with-card-item-2"
        data-hs-tab="#tabs-with-card-2"
        aria-controls="tabs-with-card-2"
        role="tab"
      >
        <span class="flex">
          <svg
            :class="
              selectedView === 'default'
                ? 'flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-blue-600'
                : 'flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-gray-800'
            "
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
            <path d="m12 14 4-4" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          </svg>
          <span class="grow ms-6">
            <span
              :class="
                selectedView === 'default'
                  ? 'block text-lg font-semibold text-blue-600'
                  : 'block text-lg font-semibold text-gray-800'
              "
              >SnapEasy UI</span
            >
            <span
              class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
              >Our UI is developed with simplicity and intuitiveness in mind,
              making it easy to use even for first-time users.</span
            >
          </span>
        </span>
      </button>
      <button
        type="button"
        @click="setSelectedView('bot')"
        class="text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl"
        :class="{
          'bg-white shadow-md hover:border-transparent': selectedView === 'bot',
        }"
        id="tabs-with-card-item-2"
        data-hs-tab="#tabs-with-card-2"
        aria-controls="tabs-with-card-2"
        role="tab"
      >
        <span class="flex">
          <Icon
            name="material-symbols:robot-2-outline"
            :class="
              selectedView === 'bot'
                ? 'flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-blue-600'
                : 'flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-gray-800'
            "
          />
          <span class="grow ms-6">
            <span
              :class="
                selectedView === 'bot'
                  ? 'block text-lg font-semibold text-blue-600'
                  : 'block text-lg font-semibold text-gray-800'
              "
              >SnapEasy Bot</span
            >
            <span
              class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
              >Try the conversational way with our SnapEasy Bot 🤖 to get web
              screenshots.</span
            >
          </span>
        </span>
      </button>
    </div>
  </div>
</template>
