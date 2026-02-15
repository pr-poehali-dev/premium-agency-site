declare global {
  interface Window {
    VK?: {
      Widgets: {
        Group: (elementId: string, options: Record<string, unknown>, groupId: string) => void;
      };
    };
  }
}

export {};
