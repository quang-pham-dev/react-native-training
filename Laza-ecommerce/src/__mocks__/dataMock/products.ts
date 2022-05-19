import { ProductProps } from 'types/Products';

export const product: ProductProps = {
  id: '0',
  brandId: '1',
  name: 'Nike',
  price: 100,
  type: 'shoes',
  like: true,
  title: 'Nike Sportswear Club Fleece',
  source:
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description:
    "Nike is a multinaelichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
  reviewer: {
    id: '2',
    name: 'John Doe',
    date: '13, Sep, 2020',
    image:
      'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  imageReview: [
    {
      id: '0',
      image:
        'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1518656306295-aa28b28b2504?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
  ],
  rating: '4.5',
  comment:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,adipisicing elit. Quisquam, quia.',
};

export const products: ProductProps[] = [
  {
    id: '0',
    brandId: '1',
    name: 'Nike',
    price: 100,
    type: 'shoes',
    like: true,
    title: 'Nike Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description:
      "Nike is a multinaelichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewer: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    imageReview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1518656306295-aa28b28b2504?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
    ],
    rating: '4.5',
    comment:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,adipisicing elit. Quisquam, quia.',
  },
  {
    id: '0',
    brandId: '1',
    name: 'Nike',
    price: 100,
    type: 'shoes',
    like: true,
    title: 'Nike Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description:
      "Nike is a multinaelichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewer: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    imageReview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1518656306295-aa28b28b2504?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      },
    ],
    rating: '4.5',
    comment:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,adipisicing elit. Quisquam, quia.',
  },
];
