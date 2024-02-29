import { component$, Slot } from '@builder.io/qwik';
import { Link, type RequestHandler } from '@builder.io/qwik-city';

import type { Session } from '@auth/core/types';
import { Nav, Button } from '@luminescent/ui';
import { CubeOutline } from 'qwik-ionicons';

export default component$(() => {
  return <>
    <Nav fixed floating>
      <Link q:slot='start' href='/'>
        <Button color='transparent' class={{
          'text-[#f0ccfb] fill-[#f0ccfb]': true,
        }}>
          <div>
            MultiShock
          </div>
        </Button>
      </Link>
      <Link q:slot="end" href="/docs" class={{
        'hidden sm:flex': true,
      }}>
        <Button color="transparent">
          <CubeOutline width="24" /> Docs
        </Button>
      </Link>
      <Link q:slot="mobile" href="/docs">
        <Button color="transparent">
          <CubeOutline width="24" /> Docs
        </Button>
      </Link>
    </Nav>
    <main>
      <section>
        <Slot />
      </section>
    </main>
  </>;
});

export const onRequest: RequestHandler = ({ sharedMap, redirect, url }) => {

  const session: Session | null = sharedMap.get('session');

  if (!session || new Date(session.expires) < new Date()) {
    throw redirect(302, `/api/auth/signin?callbackUrl=${url.pathname}`);
  }
};