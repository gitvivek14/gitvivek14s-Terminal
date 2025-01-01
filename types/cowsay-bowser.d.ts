declare module "cowsay-browser" {
    export interface SayOptions {
      text: string;
      e?: string; // Eyes
      T?: string; // Tongue
    }
  
    export function say(options: SayOptions): string;
    export function think(options: SayOptions): string;
  }
  