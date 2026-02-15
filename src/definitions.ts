export interface ZToastPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
