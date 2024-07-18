export interface Suggest {
  title: {
    text: string;
    hl: Array<{
      begin: number;
      end: number;
    }>;
  };
  subtitle: {
    text: string;
  };
  tags: Array<string>;
  distance: {
    value: number;
    text: string;
  };
}
