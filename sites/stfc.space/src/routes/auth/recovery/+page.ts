import { runLoad } from '../_load';

import type { PageLoad } from './$types';

export const load: PageLoad = async (loadEvent) => {
  return await runLoad('recovery', loadEvent);
};