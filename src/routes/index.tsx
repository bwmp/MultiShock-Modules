import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { Button } from '@luminescent/ui';

import { BookOutline, CashOutline, CubeOutline } from 'qwik-ionicons';

export default component$(() => {

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100dvh-56px)]">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col gap-2 sm:gap-6 w-full px-4 fade-in animation-delay-200">
          <h1 class="text-gray-100 text-3xl sm:text-6xl font-bold">
            MultiShock Modules
          </h1>
          <div class="flex flex-col gap-4 fade-in animation-delay-300">
            <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
              What is Multishock?
            </h2>
            <p class="text-gray-200 sm:text-lg">
              Multishock is a program that lets you use image detection to recognize text, images, icons, etc on your screen and allow them to shock you!<br />
              This can be used to detect when you die, lose a round, and so much more!<br />
              This program requires a <a href="https://pishock.com/#/" class="text-blue-400 hover:underline">PiShock</a> to work.
            </p>
            <p class="text-gray-200 sm:text-lg">
              For guides on how to setup MultiShock, create modules, and more please see<a href="/guides" class="text-blue-400 hover:underline"> this page</a><br />
            </p>
          </div>
          <div class="flex flex-col flex-wrap justify-center gap-2 mt-8 fade-in animation-delay-500">
            <div class="flex flex-wrap justify-center gap-2">
              <Link href="/guides">
                <Button color="purple" size="xl">
                  <BookOutline width="30" class="text-3xl" /> Guides
                </Button>
              </Link>
              <a href="https://paypal.me/akiradev">
                <Button color="pink" size="xl">
                  <CashOutline width="30" class="text-3xl" /> Donate
                </Button>
              </a>
            </div>
            <div class="flex flex-wrap justify-center gap-2">
              <Link href="/modules">
                <Button color="red" size="xl">
                  <CubeOutline width="30" class="text-3xl" /> Modules
                </Button>
              </Link>
              <a href="https://github.com/PiShock-Inc/MultiShock/releases/latest">
                <Button color="blue" size="xl">
                  <CubeOutline width="30" class="text-3xl" /> Download Latest
                </Button>
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
