import { component$ } from '@builder.io/qwik';
import { Button } from '@luminescent/ui';
import { Link, LogoGithub, LogoDiscord } from 'qwik-ionicons';

export default component$(() => {

  return (
    <footer class="relative flex flex-col gap-6 items-center justify-center w-full h-24 z-10 bg-gray-950/40 py-24">
      <div class="flex mt-2">
        <SocialButtons />
      </div>
      <span class="text-sm text-gray-300 max-w-6xl text-center">
        Website and MultiShock Created By AkiraDev<br/>
        For info relating to Pishock itself please join <a href="https://discord.gg/pishock" class="text-blue-400 hover:underline">This Discord</a>
      </span>
    </footer>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <Link q:slot="end" href="https://github.com/bwmp/MultiShock" class={{
      'flex fill-current hover:fill-white': true,
    }}>
      <Button color="transparent">
        <LogoGithub width="24" />
      </Button>
    </Link>
    <Link q:slot="end" href="https://discord.gg/nmgtX5z" class={{
      'flex fill-current hover:fill-white': true,
    }}>
      <Button color="transparent">
        <LogoDiscord width="24" />
      </Button>
    </Link>
  </>;
});