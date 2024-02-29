import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Button, LogoDiscord, Nav } from '@luminescent/ui';
import { CubeOutline, LogoGithub } from 'qwik-ionicons';
import Footer from '~/components/Footer';
export default component$(() => {

  return (
    <>
      <Nav fixed >
        <Link q:slot='start' href='/'>
          <Button color='transparent'>
              MultiShock
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
        <Link q:slot="end" href="https://discord.gg/EQmGcKCNyp" class={{
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