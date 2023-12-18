/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

export const arrayFilterEmpty = (
  array: {
    test: RegExp;
    loader?: string;
    use?: any;
    exclude?: RegExp;
  }[]
) => array.filter((x) => !!x);
