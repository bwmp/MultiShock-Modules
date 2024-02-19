import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import Nav from '../components/Nav';
import type { Session } from '@auth/core/types';

export default component$(() => {
  return <>
    <Nav />
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