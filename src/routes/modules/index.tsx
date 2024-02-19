import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Card, CardHeader } from '@luminescent/ui';
export default component$(() => {

  const modules = useResource$(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch('http://localhost:3000/api/v2/modules', {
      signal: abortController.signal,
    });
    const data = await res.json();
    return data;
  });

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100dvh-56px)]">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="grid grid-cols-3 gap-4 w-full px-4">
          <Resource
            value={modules}
            onPending={() => <span class="flex-1 ml-3">Loading...</span>}
            onRejected={() => <span class="flex-1 ml-3">Error</span>}
            onResolved={(modules) => {
              return <>
                {
                  modules.map((module: any, i: number) => {
                    return (
                      <Card key={i} color="blue" hoverable blobs style={{ width: '300px' }} href={'/modules/' + module.name}>
                        <CardHeader>
                          {module.name} - {module.author}
                        </CardHeader>
                        <br />
                        {module.description}
                      </Card>
                    );
                  })
                }
              </>;
            }}
          />
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