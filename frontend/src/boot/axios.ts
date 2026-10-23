import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// The backend is served on the same host under /api (proxied in development)
const api = axios.create({ baseURL: '/api' });

// Tell the user when the server is unreachable or fails, instead of leaving the page empty
api.interceptors.response.use(undefined, (error: { response?: { status: number } }) => {
  if (!error.response || error.response.status >= 500) {
    Notify.create({ type: 'negative', message: 'Сервер недоступен, попробуйте позже.' });
  }

  return Promise.reject(error);
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
