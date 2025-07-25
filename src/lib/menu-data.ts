import type { MenuItem } from '@/types';

/**
 * =================================================================================
 * MENU DATA MANAGEMENT
 * =================================================================================
 * 
 * Bu dosya, menünüzdeki tüm ürünlerin ve kategorilerin merkezi olarak 
 * yönetildiği yerdir.
 * 
 * ---------------------------------------------------------------------------------
 * YENİ KATEGORİ EKLEME/SİLME/SIRALAMA
 * ---------------------------------------------------------------------------------
 * 1. Aşağıdaki `allCategories` dizisini düzenleyerek kategorileri yönetebilirsiniz.
 * 2. Dizideki elemanların sırası, menü sayfasındaki kategori sırasını belirler.
 * 3. İlk kategori olan "Tümü" genellikle sabit kalmalıdır.
 * 
 * ---------------------------------------------------------------------------------
 * YENİ ÜRÜN NASIL EKLENİR?
 * ---------------------------------------------------------------------------------
 * 1. Aşağıdaki `allMenuItems` dizisinin içine yeni bir obje olarak ürününüzü ekleyin.
 * 2. `id` alanını benzersiz bir metin olarak belirleyin (örn: "yeni-waffle-1").
 * 3. `name`, `description`, `price` alanlarını doldurun.
 * 4. `category` alanına, ürünün ait olduğu ve yukarıdaki `allCategories` 
 *    dizisinde tanımladığınız kategorinin adını yazın.
 * 5. `imageUrl` için, `public/images/menu/` klasörüne koyduğunuz resmin adını yazın.
 *    Örneğin, resmin adı `yeni-waffle.webp` ise, `imageUrl` şöyle olmalıdır:
 *    `imageUrl: '/images/menu/yeni-waffle.webp'`
 * =================================================================================
 */

// 1. ADIM: Kategorilerinizi buradan yönetin. Sıralama önemlidir.
export const allCategories = [
  //'Tümü',
  'Waffle',
  'Sıcak İçecekler',
  'Soğuk İçecekler',
  'Ekstra Lezzetler',
];


// 2. ADIM: Ürünlerinizi buraya ekleyin.
export const allMenuItems: MenuItem[] = [
  {
    id: 'fusion-waffle',
    name: 'FUSİON WAFFLE',
    description: 'Sütlü çikolata,çilek,kivi,ananas,damla çikolata,çikolata sosu',
    price: 250.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753358520/Fusion_WAFFLE_2_qlatjz.jpg',
    //aiHint: 'strawberry waffle'
  },
  {
    id: 'choco-tropic',
    name: 'Choco Tropic',
    description: 'Sütlü çikolata,muz,çilek,badem parçaları,karamel sosu',
    price: 220.50,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361454/choco_tropic_cbgfsm.jpg',
    //aiHint: 'belgian waffle'
  },
  {
    id: 'favorite-waffle',
    name: 'Favorite Waffle',
    description: 'Sütlü çikolata,muz,çilek,kivi,antep fıstığı parçaları, çikolata sosu',
    price: 260.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361454/favorite_waffle_abjbfm.jpg',
    //aiHint: 'banana chocolate waffle'
  },
  {
    id: 'duo-waffle',
    name: 'DUO',
    description: 'Sütlü çikolata,muz,çilek,fındık parçaları,çikolata sosu',
    price: 275.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361454/duo_izmrgc.jpg',
    //aiHint: 'white chocolate waffle'
  },
  {
    id: 'nut-blanc',
    name: 'NUT BLANC',
    description: 'Beyaz çikolata,muz,çilek,yer fıstığı parçaları,çikolata sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361455/nut_blanc_jrpzga.jpg',
    //aiHint: 'lemonade'
  },
  {
    id: 'double-chocolate',
    name: 'DOUBLE CHOCOLATE',
    description: 'Bitter çikolata,beyaz çikolata,muz,çilek,antep fıstığı parçaları,çakıl çikolata,çikolata sosu',
    price: 110.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753355292/wafello_logo_ntgqw9.png',
    //aiHint: 'iced coffee'
  },
  {
    id: 'kivana',
    name: 'Kivana',
    description: 'Sütlü çikolata,muz,kivi,antep fıstığı parçaları,çikolata sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361456/kivana_peprgt.jpg',
    //aiHint: 'lemonade'
  },
  {
    id: 'coco-blis',
    name: 'Coco Blis',
    description: 'Sütlü çikolata , muz, hindistan cevizi,çikolata sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361455/coco_blis_sxzh75.jpg',
    //aiHint: 'lemonade'
  },
  {
    id: 'white-blis',
    name: 'White Blis',
    description: 'Beyaz çikolata,muz,çilek,Antep fıstığı parçaları,çikolata sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361457/white_blis_i3dpao.jpg',
    //aiHint: 'lemonade'
  },
  {
    id: 'berry-caramel',
    name: 'Berry Caramel',
    description: 'Sütlü çikolata,çilek,kivi,damla çikolata,karamel sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753361458/berry_caramel_rwjk6s.jpg',
    //aiHint: 'lemonade'
  },
  {
    id: 'oreolicius',
    name: 'Oreolicius',
    description: 'Bitter çikolata ,muz,oreo parçaları,çikolata sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753355292/wafello_logo_ntgqw9.png',
    //aiHint: 'lemonade'
  },
  {
    id: 'snowy-blis',
    name: 'Snowy Blis',
    description: 'Beyaz çikolata,muz, çilek,kivi,fındık parçaları,beyaz sosu',
    price: 90.00,
    category: 'Waffle',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753355292/wafello_logo_ntgqw9.png',
    //aiHint: 'lemonade'
  },
  // Sıcak İçecekler
{
    id: 'cay',
    name: 'Çay',
    description: '',
    price: 15.00,
    category: 'Sıcak İçecekler',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753363186/turkish-tea2_kskcy8.png',
  },
  {
    id: 'kivi-cay',
    name: 'Kivi Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
{
    id: 'portakal-cay',
    name: 'Portakal Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'elma-cay',
    name: 'Elma Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'çilek-cay',
    name: 'Çilek Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'muz-cay',
    name: 'Muz Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'kakao-cay',
    name: 'Kakao Çayı',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    description: '',
    price: 50.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'nescafe',
    name: 'Nescafe',
    description: '',
    price: 30.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'sicak-cikolata',
    name: 'Sıcak Çikolata',
    description: '',
    price: 80.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  {
    id: 'latte',
    name: 'Latte',
    description: '',
    price: 80.00,
    category: 'Sıcak İçecekler',
    imageUrl: '/',
  },
  //SOGUK İÇEÇEKLER
{
    id: 'su',
    name: 'Su',
    description: '',
    price: 15.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'coca-cola',
    name: 'Coca Cola',
    description: '',
    price: 50.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'fanta',
    name: 'Fanta',
    description: '',
    price: 50.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'sprite',
    name: 'Sprite',
    description: '',
    price: 50.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'fuse-tea',
    name: 'Fuse Tea',
    description: '',
    price: 50.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'cool-lime',
    name: 'Cool Lime',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'ice-melon',
    name: 'Ice Melon',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'ice-mango',
    name: 'Ice Mango',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'ice-berry',
    name: 'Ice Berry',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'ice-latte',
    name: 'Ice Latte',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
  {
    id: 'ice-chocolate',
    name: 'Ice Chocolate',
    description: '',
    price: 80.00,
    category: 'Soğuk İçecekler',
    imageUrl: '/',
  },
   //ÇİKOLATALAR
     {
    id: 'sütlü-cikolata',
    name: 'Sütlü Çikolata',
    description: '',
    price: 10.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Çikolatalar',
    imageUrl: '/',
  },
  {
    id: 'beyaz-cikolata',
    name: 'Beyaz Çikolata',
    description: '',
    price: 10.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Çikolatalar',
    imageUrl: '/',
  },
 {
    id: 'bitter-cikolata',
    name: 'Bitter Çikolata',
    description: '',
    price: 10.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Çikolatalar',
    imageUrl: '/',
  },
  
  //SOSLAR
  {
    id: 'karamel-sos',
    name: 'Karamel Sosu',
    description: 'Ekstra porsiyon akışkan karamel sosu.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/images/menu/ekstra-karamel-sos.webp',
    aiHint: 'caramel sauce'
  },
  {
    id: 'cikolata-sos',
    name: 'Çikolata Sosu',
    description: 'Ekstra porsiyon akışkan çikolata sosu.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/',
  },
   {
    id: 'beyaz-sos',
    name: 'Beyaz Sos',
    description: 'Ekstra porsiyon akışkan beyaz sos.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/',
  },
     {
    id: 'frambuaz-sos',
    name: 'Frambuaz Sosu',
    description: 'Ekstra porsiyon akışkan frambuaz sosu.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/',
  },
     {
    id: 'antep-fistigi-sos',
    name: 'Antep Fıstığı Sosu',
    description: 'Ekstra porsiyon antep fıstığı sosu.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/',
  },
     {
    id: 'cilek-sos',
    name: 'Çilek Sosu',
    description: 'Ekstra porsiyon çilek sosu.',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Soslar',
    imageUrl: '/',
  },

  
//SUSLEMELER
{
    id: 'damla-cikolata',
    name: 'Damla Çikolata',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'beyaz-damla-cikolata',
    name: 'Beyaz Damla Çikolata',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'cakil-cikolata',
    name: 'Çakıl Çikolata',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },  
  {
    id: 'bonibon',
    name: 'Bonibon',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'hindistan-cevizi',
    name: 'Hindistan Cevizi',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'yer-fistigi',
    name: 'Yer Fıstığı',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'file-badem',
    name: 'File Badem',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'kirik-findik',
    name: 'Kırık Fındık',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'file-antep-fistigi',
    name: 'File Antep Fıstığı',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'krem-santi',
    name: 'Krem Şanti',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'oreo',
    name: 'Oreo',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'jelibon',
    name: 'Jelibon',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'ceviz',
    name: 'Ceviz',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },
  {
    id: 'rulokat',
    name: 'Rulokat',
    description: '',
    price: 5.00,
    category: 'Ekstra Lezzetler',
    subcategory: 'Süslemeler',
    imageUrl: '/'
  },

];
