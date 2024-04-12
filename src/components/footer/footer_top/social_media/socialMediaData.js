import WhatsAppImage from "../../../../assets/Images/social network/whatsapp.svg";
import InstagramImage from "../../../../assets/Images/social network/instagram.svg";
import TelegramImage from "../../../../assets/Images/social network/telegram.svg";
import FacebookImage from "../../../../assets/Images/social network/facebook.svg";

const socialMediaData = [
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=#!",
    className: "footer-top__contact-info_social-media_WhatsApp",
    image: WhatsAppImage,
    alt: "WhatsApp Logo",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ваш_профиль/",
    className: "footer-top__contact-info_social-media_Instagram",
    image: InstagramImage,
    alt: "Instagram Logo",
  },
  {
    name: "Telegram",
    href: "https://t.me/ваш_пользователь",
    className: "footer-top__contact-info_social-media_Telegram",
    image: TelegramImage,
    alt: "Telegram Logo",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ваш_профиль/",
    className: "footer-top__contact-info_social-media_Facebook",
    image: FacebookImage,
    alt: "Facebook Logo",
  },
];

export { socialMediaData };