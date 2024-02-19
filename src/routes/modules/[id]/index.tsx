import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { useLocation, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  const id = location.params.id;

  const module_info = useResource$(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(`http://localhost:3000/api/v2/module/${id}`, {
      signal: abortController.signal,
    });
    const data = await res.json();
    console.log(data);
    return data;
  });

  return <>
    <section class="flex flex-col items-center justify-center pt-10">
      <h1 class="font-bold text-gray-50 text-2xl sm:text-4xl mb-2">
        {id}
      </h1>
      <Resource
        value={module_info}
        onPending={() => <span class="flex-1 ml-3">Loading...</span>}
        onRejected={() => <span class="flex-1 ml-3">Error</span>}
        onResolved={(module_info) => {
          return <>
            <h2 class="text-gray-50 text-base sm:text-xl mb-12">
              {module_info.config.description}
            </h2>
            <p>Author: {module_info.config.author}</p>
            <div>
              Images:
              {module_info.images.map((image: string) => (
                <img key={image} src={`http://localhost:3000/api/v2/module/${id}/${image}`} alt={image} width="250" height="250" />
              ))}
            </div>
          </>;
        }}
      />
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
