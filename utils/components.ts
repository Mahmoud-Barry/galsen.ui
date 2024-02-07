export interface IComponent {
  image: string;
  name: string;
  count: number;
  alt: string;
}
export const componentsFakeData: IComponent[] = [
  {
    image: "/images/tables.png",
    name: "Tables",
    count: 3,
    alt: "Tables components",
  },
  {
    image: "/images/cards.png",
    name: "Cards",
    count: 4,
    alt: "Cards components",
  },
  {
    image: "/images/navbars.png",
    name: "Navbars",
    count: 3,
    alt: "Navbars components",
  },
  {
    image: "/images/footers.png",
    name: "Footers",
    count: 2,
    alt: "Footers components",
  },
  {
    image: "/images/forms.png",
    name: "Forms",
    count: 3,
    alt: "Forms components",
  },
  {
    image: "/images/buttons.png",
    name: "Butons",
    count: 2,
    alt: "Butons components",
  },
];
