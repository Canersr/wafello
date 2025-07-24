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
  'Tümü',
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
{
    id: 'cay',
    name: 'Çay',
    description: '',
    price: 20.00,
    category: 'Sıcak İçecekler',
    imageUrl: 'https://res.cloudinary.com/dxwwviisy/image/upload/v1753363186/turkish-tea2_kskcy8.png',
    //aiHint: 'lemonade'
  }
];
