import { Resource, component$, useResource$, useStore } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Card, NumberInput, TextInput } from '@luminescent/ui';
export default component$(() => {

  const store = useStore({
    page: 1,
    name: true,
    author: false,
    searchQuery: '',
    ascending: true,
  });

  const modules = useResource$(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch('https://multishock.akiradev.me/api/v2/modules', {
      signal: abortController.signal,
    });
    const data = await res.json();
    return data;
  });

  const PAGE_SIZE = 10;
  const startIndex = (store.page - 1) * PAGE_SIZE;
  const endIndex = store.page * PAGE_SIZE;

  const getSortedModules = (modules: any) => {
    const filteredModules = modules.filter((module: any) => {
      if (
        store.name &&
        module.name.toLowerCase().includes(store.searchQuery.toLowerCase())
      ) {
        return true;
      }
      if (
        store.author &&
        module.author.toLowerCase().includes(store.searchQuery.toLowerCase())
      ) {
        return true;
      }
      if (!store.name && !store.author) {
        return true;
      }
      return false;
    });
    return store.ascending ? filteredModules : filteredModules.reverse();
  };

  return <>
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-white text-3xl sm:text-4xl mb-6 items-center justify-center drop-shadow-xl text-center">
        <div class="py-5">
          <h1 class="mb-4">
            Multishock Community Modules
          </h1>
          <p class="font-normal text-xl">
            This is a community made modules for different games and applications to use with Multishock!
          </p>
          <p class="font-normal text-xl">
            Want to contribute? Check out the <a href="/submit" class="text-blue-400 hover:underline">submit page</a>!
          </p>
          <TextInput placeholder='Search Term' id="searchTerm" onInput$={(event: any) => (store.searchQuery = event.target.value)}>
          </TextInput>
        </div>
        <Resource
          value={modules}
          onPending={() => <span class="flex-1 ml-3">Loading...</span>}
          onRejected={() => <span class="flex-1 ml-3">Error</span>}
          onResolved={(modules) => {
            const sortedModules = getSortedModules(modules);
            const totalPages = Math.ceil(sortedModules.length / PAGE_SIZE);
            const visibleModules = sortedModules.slice(startIndex, endIndex);
            return (
              <>
                <div class="pb-5">
                  <h1>
                    {`Page: ${store.page} of ${totalPages}`}
                  </h1>
                  <NumberInput min={1} max={totalPages} id="NumberInput" class={{ 'pb-5': true }}
                    onInput$={(event: any) => {
                      store.page = event.target.value;
                    }}
                    value={store.page}
                    onIncrement$={() => {
                      if (store.page < totalPages) {
                        store.page += 1;
                      }
                    }}
                    onDecrement$={() => {
                      if (store.page > 1) {
                        store.page -= 1;
                      }
                    }}
                  />
                </div>
                <div class="grid grid-flow-row auto-row-auto gap-4">
                  {
                    visibleModules.map((module: any, i: number) => {
                      return (
                        <>
                          <Card key={i} blobs href={'/modules/' + module.name}>
                            <div class="text-3xl">
                              {module.name} by {module.author}
                            </div>
                            <div class="text-2xl">
                              {module.description}
                            </div>
                          </Card>
                        </>
                      );
                    })
                  }
                </div>
                <div class="pt-5">
                  <NumberInput min={1} max={totalPages} id="NumberInput" class={{ 'pb-5': true }}
                    onInput$={(event: any) => {
                      store.page = event.target.value;
                    }}
                    value={store.page}
                    onIncrement$={() => {
                      if (store.page < totalPages) {
                        store.page += 1;
                      }
                    }}
                    onDecrement$={() => {
                      if (store.page > 1) {
                        store.page -= 1;
                      }
                    }}
                  >
                  </NumberInput>
                  <h1>
                    {`Page: ${store.page} of ${totalPages}`}
                  </h1>
                </div>
              </>
            );
          }}
        />
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