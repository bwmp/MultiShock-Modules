export const onGet: any = async ({ json }: any) => {
  throw json(200, {
    endpoints: [
      '/api/v1/modules',
      '/api/v1/module/:id/config',
      '/api/v1/module/:id/images',
      '/api/v1/module/:id/download',
      '/api/v1/module/:id/:item',
    ],
  });
};