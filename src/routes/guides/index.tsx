import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Button, Card, Header } from '@luminescent/ui';

export default component$(() => {

  return <>
    <section class="max-w-6xl mx-auto py-32 px-4 flex flex-col gap-4">
      <div class="text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4">
        Guides
      </div>
      <Card>
        <Header>
          v2 Guides (Deprecated Soon)
        </Header>
        <a href="/guides/v2">
          <Button color="pink" size="xl">
            View
          </Button>
        </a>
      </Card>
      <Card>
        <Header>
          v3 Guides
        </Header>
        <a href="/guides/v3">
          <Button color="pink" size="xl">
            View
          </Button>
        </a>
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
