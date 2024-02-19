import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { CashOutline, CubeOutline } from 'qwik-ionicons';

export default component$(() => {

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100dvh-56px)]">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col gap-2 sm:gap-6 w-full px-4">
          <h1 class="text-gray-100 text-3xl sm:text-6xl font-bold fade-in animation-delay-200">
            MultiShock Modules
          </h1>
          <div class="flex flex-col gap-2 mt-8 fade-in animation-delay-400">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="https://paypal.me/akiradev" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-pink-900/80 hover:bg-pink-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                <CashOutline width="30" class="text-3xl" /> Donate
              </a>
              <Link href="/modules" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-purple-700/80 hover:bg-purple-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                <CubeOutline width="30" class="text-3xl" /> Modules
              </Link>
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
