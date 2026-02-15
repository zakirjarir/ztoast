import { WebPlugin } from '@capacitor/core';

import type { ZToastPlugin } from './definitions';

export class ZToastWeb extends WebPlugin implements ZToastPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
