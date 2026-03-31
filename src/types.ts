export type Language = 'nl' | 'de' | 'en';

export interface MenuItem {
  id: string;
  name: {
    nl: string;
    de: string;
    en: string;
  };
  description?: {
    nl: string;
    de: string;
    en: string;
  };
  price: string | number;
  priceDetail?: string;
}

export interface MenuSection {
  id: string;
  title: {
    nl: string;
    de: string;
    en: string;
  };
  items: MenuItem[];
}

export interface MenuData {
  sections: MenuSection[];
}
