import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Card, Header } from '@luminescent/ui';

export default component$(() => {

  return <>
    <section class="max-w-6xl mx-auto py-32 px-4 flex flex-col gap-4">
      <div class="text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4">
        Guides
      </div>
      <Card>
        <Header id="Virus">
          Download marked as a virus
        </Header>
        <video controls>
          <source src="https://projects.akiradev.me/MultiShock/MarkedAsVirus.mp4" type='video/mp4' />
        </video>
      </Card>
      <Card>
        <Header id="Setup">
          Setup
        </Header>
        <video controls>
          <source src="https://projects.akiradev.me/MultiShock/Setup.mp4" type='video/mp4' />
        </video>
        <ul class="list-decimal">
          <li>Download the EXE from <a href="https://github.com/bwmp/MultiShock/releases/latest" class="text-blue-400 hover:underline">Here</a></li>
          <li>Run the EXE</li>
          <li>Click <span class="font-bold">CONFIG</span> button in the GUI</li>
          <li>Go to the <a href="https://pishock.com/#/account" class="text-blue-400 hover:underline">PiShock Account Page</a></li>
          <li>Get Your username and api key and enter them in the first 2 fields of the config window</li>
          <li>select the monitor you want the application to check (i highly suggest not selecting all as it will massively impact performance)</li>
          <li>Click the Add Shocker button</li>
          <li>Go to <a href="https://pishock.com/#/account" class="text-blue-400 hover:underline">Shocker Control Page</a>, Click share on a shocker, Click CODE, Then copy the code and paste it in the Share Code input for the shocker</li>
          <li>Finally click save and you're done!</li>
        </ul>
      </Card>
      <Card>
        <Header id="Create">
          Creating a module
        </Header>
        <video controls>
          <source src="https://projects.akiradev.me/MultiShock/CreateAModule.mp4" type='video/mp4' />
        </video>
        I really dont wanna write out a tutorial for this so uhh just watch the video and dm me any questions thx &lt;3
      </Card>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Guides',
  meta: [
    {
      name: 'description',
      content: 'Multishock setup guides',
    },
    {
      name: 'og:description',
      content: 'Multishock setup guides',
    },
  ],
};
