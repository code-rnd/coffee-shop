import {
  ExtraProductModel,
  ProductCategory,
  ProductModel,
  PropertyTypes,
} from "../../store/products/products.model";

export const ProductListMock: ProductModel[] = [
  {
    id: 1,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.LUNCH,
    description: "Пюре, сосиска с сыром",
    fats: 100,
    name: "Пюре с сосиской",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8f702234-02d7-4093-a386-fd5395057dd9/-/resize/x1024/-/format/auto/",
  },
  {
    id: 2,
    price: 200,
    kilocalories: 201,
    carbohydrates: 53,
    category: ProductCategory.LUNCH,
    description: "Перловка, сосиска с сыром",
    fats: 91,
    name: "Перловка с сосиской",
    proteins: 55,
    weight: 12,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/f55c83a3-bbef-43a0-9c4e-16f9f82667fd/-/resize/x1024/-/format/auto/",
  },
  {
    id: 3,
    price: 90,
    kilocalories: 303,
    carbohydrates: 22,
    category: ProductCategory.DRINK,
    description: "Клуб-мате",
    fats: 41,
    name: "Коктейль",
    proteins: 83,
    weight: 22,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/4d2031b8-4b10-43cb-a1b5-de6d22d4c6bb/-/resize/x1024/-/format/auto/",
  },
  {
    id: 4,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.DRINK,
    description: "Горячий зелёный чай",
    fats: 100,
    name: "Зелёный чай",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/05e81d0f-f121-41d4-a065-6ef438556ce8/-/resize/x1024/-/format/auto/",
  },
  {
    id: 5,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.DRINK,
    description: "Чай черный",
    fats: 100,
    name: "Чёрный листовой чай",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/61bc5574-9c6e-4245-b168-d79fd42f7e5a/-/resize/x1024/-/format/auto/",
  },
  {
    id: 6,
    price: 200,
    kilocalories: 201,
    carbohydrates: 53,
    category: ProductCategory.BREAKFAST,
    description: "Пять творожных сырников, вишневое варенье, сметана, сгущенка",
    fats: 91,
    name: "Сырники",
    proteins: 55,
    weight: 12,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8b88d3b4-254a-42eb-abf2-6bca26a0d9df/-/resize/x1024/-/format/auto/",
  },
  {
    id: 7,
    price: 90,
    kilocalories: 303,
    carbohydrates: 22,
    category: ProductCategory.BREAKFAST,
    description: "Четыре блина с беконом и сыром",
    fats: 41,
    name: "Блинчики с беконом",
    proteins: 83,
    weight: 22,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/b1159b2d-bfe6-4cf7-bad0-2e23efca4b4d/-/resize/x1024/-/format/auto/",
  },
  {
    id: 8,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.LUNCH,
    description: "Купаты, двойная глазунья, салат из капусты, два хлеба, латте",
    fats: 100,
    name: "Анлгийский завтрак",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/6571fda5-73d4-498d-a3c5-4166b6fd19fe/-/resize/x1024/-/format/auto/",
  },
  {
    id: 9,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.BREAKFAST,
    description: "Два блина с нутеллой",
    fats: 100,
    name: "Блинчики с нутеллой",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/fd8caaa5-fd9f-4904-8e70-77a1a76d7b34/-/resize/x1024/-/format/auto/",
  },
  {
    id: 10,
    price: 200,
    kilocalories: 201,
    carbohydrates: 53,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 55,
    weight: 12,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8fcd3a34-087f-461d-81b5-72fc5a9ace94/-/resize/x1024/-/format/auto/",
  },
  {
    id: 11,
    price: 90,
    kilocalories: 303,
    carbohydrates: 22,
    category: ProductCategory.LUNCH,
    description:
      "Фасоль стручковая, лук, соевый соус, масло растительное, соль и перец.",
    fats: 41,
    name: "Стручковая фасоль в соевом соусе",
    proteins: 83,
    weight: 22,
    propertyTypes: PropertyTypes.VEGAN,
    src:
      "https://ucarecdn.com/118bb7ee-690e-4322-83bf-b7b770ba77c9/-/resize/x1024/-/format/auto/",
  },
  {
    id: 12,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.DINNER,
    description:
      "Огурцы, томаты черри, тунец, яйцо, маслины, оливки, айсберг, руккола, шпинат, масло оливковое, лимон, чеснок, соль и перец",
    fats: 91,
    name: "Салат нисуаз с тунцом",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.FISH,
    src:
      "https://ucarecdn.com/df7664c0-3577-4f30-9047-9e8a21705759/-/resize/x1024/-/format/auto/",
  },
  {
    id: 13,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/cce404f6-10a7-4b2d-ac6d-da8f5e1f5bad/-/resize/x1024/-/format/auto/",
  },
  {
    id: 14,
    price: 200,
    kilocalories: 201,
    carbohydrates: 53,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 55,
    weight: 12,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8fcd3a34-087f-461d-81b5-72fc5a9ace94/-/resize/x1024/-/format/auto/",
  },
  {
    id: 15,
    price: 90,
    kilocalories: 303,
    carbohydrates: 22,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 83,
    weight: 22,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/cce404f6-10a7-4b2d-ac6d-da8f5e1f5bad/-/resize/x1024/-/format/auto/",
  },
  {
    id: 16,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/cce404f6-10a7-4b2d-ac6d-da8f5e1f5bad/-/resize/x1024/-/format/auto/",
  },
  {
    id: 17,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8fcd3a34-087f-461d-81b5-72fc5a9ace94/-/resize/x1024/-/format/auto/",
  },
  {
    id: 18,
    price: 200,
    kilocalories: 201,
    carbohydrates: 53,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 55,
    weight: 12,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/cce404f6-10a7-4b2d-ac6d-da8f5e1f5bad/-/resize/x1024/-/format/auto/",
  },
  {
    id: 19,
    price: 90,
    kilocalories: 303,
    carbohydrates: 22,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 83,
    weight: 22,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/cce404f6-10a7-4b2d-ac6d-da8f5e1f5bad/-/resize/x1024/-/format/auto/",
  },
  {
    id: 20,
    price: 350,
    kilocalories: 405,
    carbohydrates: 100,
    category: ProductCategory.BREAKFAST,
    description: "Манная каша с сухофруктам",
    fats: 91,
    name: "Каша",
    proteins: 43,
    weight: 30,
    propertyTypes: PropertyTypes.ALL,
    src:
      "https://ucarecdn.com/8fcd3a34-087f-461d-81b5-72fc5a9ace94/-/resize/x1024/-/format/auto/",
  },
];

export const ExtraProductListMock: ExtraProductModel[] = [
  {
    id: 1,
    price: 45,
    name: "Гренки",
    weight: 50,
    category: [ProductCategory.LUNCH, ProductCategory.DINNER],
    src:
      "https://ucarecdn.com/7d3b1c22-6797-4248-8eac-cbb673d20a78/-/resize/x256/-/format/auto/",
  },
  {
    id: 2,
    price: 50,
    name: "Сметана",
    weight: 60,
    category: [
      ProductCategory.BREAKFAST,
      ProductCategory.LUNCH,
      ProductCategory.DINNER,
    ],
    src:
      "https://ucarecdn.com/4dd092e0-d65d-4b6c-ad25-f11f774ee400/-/resize/x256/-/format/auto/",
  },
  {
    id: 3,
    price: 35,
    name: "Сгущенка",
    weight: 50,
    category: [
      ProductCategory.BREAKFAST,
      ProductCategory.LUNCH,
      ProductCategory.DINNER,
      ProductCategory.DRINK,
    ],
    src:
      "https://ucarecdn.com/9d574fd8-33f1-45c3-bdd8-9cbf60e1b3a2/-/resize/x256/-/format/auto/",
  },
  {
    id: 4,
    price: 65,
    name: "Бальзамик",
    weight: 50,
    category: [
      ProductCategory.BREAKFAST,
      ProductCategory.LUNCH,
      ProductCategory.DINNER,
    ],
    src:
      "https://ucarecdn.com/cac9072a-97c3-400f-a366-93e824bf33b9/-/resize/x256/-/format/auto/",
  },
  {
    id: 5,
    price: 75,
    name: "Соевый соус",
    weight: 50,
    category: [ProductCategory.LUNCH, ProductCategory.DINNER],
    src:
      "https://ucarecdn.com/3f5069bf-c247-4848-b17d-17a286919179/-/resize/x256/-/format/auto/",
  },
  {
    id: 6,
    price: 45,
    name: "Сацебели",
    weight: 50,
    category: [ProductCategory.LUNCH, ProductCategory.DINNER],
    src:
      "https://ucarecdn.com/75cb7926-1cee-49a1-a513-a51b11b2f632/-/resize/x256/-/format/auto/",
  },
  {
    id: 7,
    price: 50,
    name: "ТарТар",
    weight: 30,
    category: [ProductCategory.LUNCH, ProductCategory.DINNER],
    src:
      "https://ucarecdn.com/57e98ec3-00ce-4910-8338-efa0c071f869/-/resize/x256/-/format/auto/",
  },
];
