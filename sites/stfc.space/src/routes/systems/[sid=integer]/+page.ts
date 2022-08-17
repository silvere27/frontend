import { extendTranslations } from '$lib/i18n';
import { YukiApi } from '$lib/shared/api';
import type { SystemDetail } from '$lib/shared/yuki/models';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params, fetch }) => {
  const { lang } = await parent();
  const system: SystemDetail = await YukiApi.get('/system/' + params.sid, undefined, fetch);
  await extendTranslations(lang, [{ path: 'systems', ids: [params.sid] }], fetch);
  return { system };
};