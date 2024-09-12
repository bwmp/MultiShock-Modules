import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100dvh-56px)]">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col gap-2 sm:gap-6 w-full px-4">
          <h1 class="text-gray-100 text-2xl sm:text-4xl font-bold fade-in animation-delay-200">
            Currently to submit a module for the community, you must post it in the modules forum in the PiShock Discord. if the module gets enough upvotes it will be added!
          </h1>
          <p class="text-gray-100 text-xl sm:text-3xl font-bold fade-in animation-delay-200">
            In the future, we will have a form to submit modules.
          </p>
          <div class="flex flex-col gap-2 mt-8 fade-in animation-delay-400">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="https://discord.gg/pishock" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-pink-900/80 hover:bg-pink-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                PiShock Discord server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Pain and Suffering',
  meta: [
    {
      name: 'description',
      content: 'Multishock Modules',
    },
    {
      name: 'og:description',
      content: 'Multishock Modules',
    },
  ],
};
