import fb from '@/assets/imgs/fb_logo.webp';
import mail from '@/assets/imgs/mail_logo.webp';
import map from '@/assets/imgs/map_logo.webp';
import phone from '@/assets/imgs/phone_call_logo.webp';
import zalo from '@/assets/imgs/zl_logo.webp';

export const socialLinks = [
  { key: 1, href: 'https://zalo.me/0901309866', img: zalo, label: 'Zalo' },
  {
    key: 2,
    href: 'https://www.facebook.com/iescollege.edu.vn',
    img: fb,
    label: 'Facebook',
  },
];
export const socialCn = [
  { key: 'phone', label: 'Call', href: 'tel:0901309866', icon: phone },
  {
    key: 'mail',
    label: 'Email',
    href: 'mailto:info@iescollege.edu.vn',
    icon: mail,
  },
  { key: 'map', label: 'Map', href: 'https://www.google.com/maps', icon: map },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: fb,
  },
  {
    key: 'zalo',
    label: 'Zalo',
    href: 'https://zalo.me/0901309866',
    icon: zalo,
  },
];
