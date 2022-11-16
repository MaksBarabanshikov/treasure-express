/// <reference types="react-scripts" />
declare module 'uuid'
declare module 'scroll-lock'

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
