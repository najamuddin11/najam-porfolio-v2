import pinLight from "../assets/icons/pin-light.svg";
import pinDark from "../assets/icons/pin-dark.svg";
import phoneLight from "../assets/icons/phone-call-purple.svg";
import phoneDark from "../assets/icons/phone-call-dark.svg";
import mailLight from "../assets/icons/mail-light.svg";
import mailDark from "../assets/icons/mail-dark.svg";

const contactData = [
  {
    id: 1,
    text: ["Dubai, United Arab Emirates"],
    iconLight: pinLight,
    iconDark: pinDark,
    link: "https://goo.gl/maps/i8uzkcWfhfgAq9zw9",
  },
  {
    id: 2,
    text: ["+971 50 926 8787", "+92 335 5943502 (whatsapp only)"],
    iconLight: phoneLight,
    iconDark: phoneDark,
    link: "tel:+971588307274",
  },
  {
    id: 3,
    text: ["najam.uddin583371@gmail.com"],
    iconLight: mailLight,
    iconDark: mailDark,
    link: "mailto:najam.uddin583371@gmail.com",
  },
];
export default contactData;
