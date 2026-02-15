import { WebPlugin } from '@capacitor/core';
import type { ZToastPlugin } from './definitions';
export declare class ZToastWeb extends WebPlugin implements ZToastPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
