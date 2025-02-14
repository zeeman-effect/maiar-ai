import { Plugin } from "../plugin";

export interface PluginRegistryInterface {
  register(plugin: Plugin): void;
  getPlugin(id: string): Plugin | undefined;
  getAllPlugins(): Plugin[];
}
