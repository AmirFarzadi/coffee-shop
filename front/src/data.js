const products = [
  {
    id: 1,
    name: 'قهوه لاوازا اسپرسو باریستا گرن کرما (1kg)',
    price: 235000,
    description: 'قهوه اسپرسو با طعمی بی‌نظیر و عطر خوشایند، مناسب برای علاقه‌مندان به اسپرسو.',
    image: 'img/coffee1.jpg',
    route: 'lavazza-barista-gran-crema-1kg'
  },
  {
    id: 2,
    name: 'قهوه سیناترا ایتالیانو (500g)',
    price: 150000,
    description: 'قهوه ای ایتالیایی با طعم متعادل و شیرینی طبیعی، مناسب برای استفاده در دستگاه‌های اسپرسو.',
    image: 'img/coffee2.jpg',
    route: 'sinatra-italiano-500g'
  },
  {
    id: 3,
    name: 'قهوه کافه استارباکس پریموم (250g)',
    price: 120000,
    description: 'قهوه با طعمی غنی و کرمی، مناسب برای تهیه قهوه لاته و موکا.',
    image: 'img/coffee3.jpg',
    route: 'starbucks-premium-250g'
  },
  {
    id: 4,
    name: 'قهوه ریو کافه کولمبیا (1kg)',
    price: 180000,
    description: 'قهوه از مزرعه‌های کلمبیا با طعم ملایم و عطر دلپذیر.',
    image: 'img/coffee4.jpg',
    route: 'rio-cafe-colombia-1kg'
  },
  {
    id: 5,
    name: 'قهوه دلوچه گیوستو (500g)',
    price: 170000,
    description: 'قهوه ای با طعمی تلخ و عطر قوی، مناسب برای عاشقان قهوه‌های تیره.',
    image: 'img/coffee5.jpg',
    route: 'deluche-giusto-500g'
  },
  {
    id: 6,
    name: 'قهوه گودا دارک روست (1kg)',
    price: 210000,
    description: 'قهوه‌ای با طعم بسیار غنی و تیره، بهترین انتخاب برای اسپرسو.',
    image: 'img/coffee6.jpg',
    route: 'goda-dark-roast-1kg'
  },
  {
    id: 7,
    name: 'قهوه دانه‌ای کوپا (250g)',
    price: 95000,
    description: 'قهوه‌ای با طعمی تیز و تلخ، مناسب برای دستگاه‌های قهوه ساز خانگی.',
    image: 'img/coffee7.jpg',
    route: 'copa-beans-250g'
  },
  {
    id: 8,
    name: 'قهوه بیسترو گولد (500g)',
    price: 140000,
    description: 'قهوه با طعمی سبک و شیرین، ایده‌آل برای تهیه قهوه دمی یا فیلتر.',
    image: 'img/coffee8.jpg',
    route: 'bistro-gold-500g'
  },
  {
    id: 9,
    name: 'قهوه استارباکس گلد (1kg)',
    price: 240000,
    description: 'قهوه ای با طعم تند و خاص، مناسب برای تهیه قهوه‌های سرد و گرم.',
    image: 'img/coffee9.jpg',
    route: 'starbucks-gold-1kg'
  },
  {
    id: 10,
    name: 'قهوه بونا کافه (500g)',
    price: 130000,
    description: 'قهوه‌ای ملایم با طعمی شیرین، مناسب برای نوشیدنی‌های مختلف قهوه.',
    image: 'img/coffee10.jpg',
    route: 'buna-cafe-500g'
  },
];


export default products