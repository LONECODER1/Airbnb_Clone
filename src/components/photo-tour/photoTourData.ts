// Import all 43 photos in order
import p1 from '../../assets/photo_tour/all_photos/p1.jpeg';
import p2 from '../../assets/photo_tour/all_photos/p2.jpeg';
import p3 from '../../assets/photo_tour/all_photos/p3.jpeg';
import p4 from '../../assets/photo_tour/all_photos/p4.jpeg';
import p5 from '../../assets/photo_tour/all_photos/p5.jpeg';
import p6 from '../../assets/photo_tour/all_photos/p6.jpeg';
import p7 from '../../assets/photo_tour/all_photos/p7.jpeg';
import p8 from '../../assets/photo_tour/all_photos/p8.jpeg';
import p9 from '../../assets/photo_tour/all_photos/p9.jpeg';
import p10 from '../../assets/photo_tour/all_photos/p10.jpeg';
import p11 from '../../assets/photo_tour/all_photos/p11.jpeg';
import p12 from '../../assets/photo_tour/all_photos/p12.jpeg';
import p13 from '../../assets/photo_tour/all_photos/p13.jpeg';
import p14 from '../../assets/photo_tour/all_photos/p14.jpeg';
import p15 from '../../assets/photo_tour/all_photos/p15.jpeg';
import p16 from '../../assets/photo_tour/all_photos/p16.jpeg';
import p17 from '../../assets/photo_tour/all_photos/p17.jpeg';
import p18 from '../../assets/photo_tour/all_photos/p18.jpeg';
import p19 from '../../assets/photo_tour/all_photos/p19.jpeg';
import p20 from '../../assets/photo_tour/all_photos/p20.jpeg';
import p21 from '../../assets/photo_tour/all_photos/p21.jpeg';
import p22 from '../../assets/photo_tour/all_photos/p22.jpeg';
import p23 from '../../assets/photo_tour/all_photos/p23.jpeg';
import p24 from '../../assets/photo_tour/all_photos/p24.jpeg';
import p25 from '../../assets/photo_tour/all_photos/p25.jpeg';
import p26 from '../../assets/photo_tour/all_photos/p26.jpeg';
import p27 from '../../assets/photo_tour/all_photos/p27.jpeg';
import p28 from '../../assets/photo_tour/all_photos/p28.jpeg';
import p29 from '../../assets/photo_tour/all_photos/p29.jpeg';
import p30 from '../../assets/photo_tour/all_photos/p30.jpeg';
import p31 from '../../assets/photo_tour/all_photos/p31.jpeg';
import p32 from '../../assets/photo_tour/all_photos/p32.jpeg';
import p33 from '../../assets/photo_tour/all_photos/p33.jpeg';
import p34 from '../../assets/photo_tour/all_photos/p34.jpeg';
import p35 from '../../assets/photo_tour/all_photos/p35.jpeg';
import p36 from '../../assets/photo_tour/all_photos/p36.jpeg';
import p37 from '../../assets/photo_tour/all_photos/p37.jpeg';
import p38 from '../../assets/photo_tour/all_photos/p38.jpeg';
import p39 from '../../assets/photo_tour/all_photos/p39.jpeg';
import p40 from '../../assets/photo_tour/all_photos/p40.jpeg';
import p41 from '../../assets/photo_tour/all_photos/p41.jpeg';
import p42 from '../../assets/photo_tour/all_photos/p42.jpeg';
import p43 from '../../assets/photo_tour/all_photos/p43.jpeg';

import { getImageSrc } from '../../utils/image';

export const ALL_PHOTOS: string[] = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
  p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
  p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
  p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
  p41, p42, p43
].map(getImageSrc);

export interface PhotoSection {
  id: string;
  name: string;
  subtext: string;
  coverImage: string;
  startIndex: number; // 1-based index (p1 = 1)
  count: number;
}

export const PHOTO_SECTIONS: PhotoSection[] = [
  {
    id: 'living-room-1',
    name: 'Living room 1',
    subtext: 'Sofa · Air conditioning · Ceiling fan · TV',
    coverImage: getImageSrc(p1),
    startIndex: 1,
    count: 3,
  },
  {
    id: 'living-room-2',
    name: 'Living room 2',
    subtext: 'Ceiling fan · Hot tub',
    coverImage: getImageSrc(p4),
    startIndex: 4,
    count: 7,
  },
  {
    id: 'full-kitchen',
    name: 'Full kitchen',
    subtext: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    coverImage: getImageSrc(p11),
    startIndex: 11,
    count: 2,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtext: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    coverImage: getImageSrc(p13),
    startIndex: 13,
    count: 6,
  },
  {
    id: 'full-bathroom',
    name: 'Full bathroom',
    subtext: 'Body soap · Hair dryer · Hot water · Shampoo',
    coverImage: getImageSrc(p19),
    startIndex: 19,
    count: 1,
  },
  {
    id: 'gym',
    name: 'Gym',
    subtext: 'Private fitness center with cardio and weight equipment',
    coverImage: getImageSrc(p20),
    startIndex: 20,
    count: 5,
  },
  {
    id: 'exterior',
    name: 'Exterior',
    subtext: 'Lush green lawns and elegant villa architecture',
    coverImage: getImageSrc(p25),
    startIndex: 25,
    count: 6,
  },
  {
    id: 'pool',
    name: 'Pool',
    subtext: 'Private swimming pool with sun loungers',
    coverImage: getImageSrc(p31),
    startIndex: 31,
    count: 3,
  },
  {
    id: 'additional-photos',
    name: 'Additional photos',
    subtext: 'Details, decor and surrounding neighbourhood',
    coverImage: getImageSrc(p34),
    startIndex: 34,
    count: 10,
  },
];

export function getSectionNameForPhotoIndex(photoIndex1Based: number): string {
  for (const sec of PHOTO_SECTIONS) {
    if (photoIndex1Based >= sec.startIndex && photoIndex1Based < sec.startIndex + sec.count) {
      return sec.name;
    }
  }
  return 'Photos';
}
