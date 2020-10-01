export type ResponsiveWrapperProps = {
  on: boolean;
  props: {
    theme: any;
    state: {
      responsive: {
        defaultPresets: { [name: string]: [number, number] };
        scale: number;
        resolution: [number, number];
      };
      mode: 'responsive' | null;
    };
    actions: { setResolution: (size: number[]) => void };
  };
  children?: any;
};
