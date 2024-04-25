import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Button, LoadingIcon, LogoDiscord, Nav } from '@luminescent/ui';
import { BookOutline, CubeOutline, LogoGithub } from 'qwik-ionicons';
import Footer from '~/components/Footer';

import Logo from '~/images/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <Nav fixed >
        <Link q:slot="start" href="/">
          <Button color="transparent" size="sm">
            <div class="relative w-12">
              <Logo class="pb-2 w-3/4 mx-auto" />
            </div>
            <p class="font-medium">
              Multishock
            </p>
            <div class={{
              'transition-all': true,
              '-ml-6 opacity-0': !loc.isNavigating,
            }}>
              <LoadingIcon width={16} speed="0.4s" />
            </div>
          </Button>
        </Link>
        <Link q:slot="end" href="/guides" class={{
          'hidden sm:flex': true,
        }}>
          <Button color="transparent">
            <BookOutline width="24" /> Guides
          </Button>
        </Link>
        <Link q:slot="mobile" href="/guides">
          <Button color="transparent">
            <BookOutline width="24" /> Guides
          </Button>
        </Link>
        <Link q:slot="end" href="/modules" class={{
          'hidden sm:flex': true,
        }}>
          <Button color="transparent">
            <CubeOutline width="24" /> Modules
          </Button>
        </Link>
        <Link q:slot="mobile" href="/modules">
          <Button color="transparent">
            <CubeOutline width="24" /> Modules
          </Button>
        </Link>
        <Link q:slot="end" href="https://github.com/bwmp/MultiShock" class={{
          'hidden sm:flex': true,
        }}>
          <Button color="transparent">
            <LogoGithub width="24" /> Github
          </Button>
        </Link>
        <Link q:slot="mobile" href="https://github.com/bwmp/MultiShock">
          <Button color="transparent">
            <LogoGithub width="24" /> Github
          </Button>
        </Link>
        <Link q:slot="end" href="https://discord.gg/pishock" class={{
          'hidden sm:flex': true,
        }}>
          <Button color="transparent">
            <LogoDiscord width="24" /> Discord
          </Button>
        </Link>
        <Link q:slot="mobile" href="https://discord.gg/EQmGcKCNyp">
          <Button color="transparent">
            <LogoDiscord width="24" /> Discord
          </Button>
        </Link>
      </Nav>
      <main>
        <Slot />
      </main>
      <Footer />
    </>);
});