export interface Project {
  id: number;
  name: string;
  url: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Volney Inc.",
    url: "https://www.volney.in/",
    images: [
      "/images/volney_1.png",
      "/images/volney_2.png",
      "/images/volney_3.png",
      "/images/volney_4.png",
    ],
  },
  {
    id: 2,
    name: "Paras LED",
    url: "https://www.parasled.com/",
    images: [
      "/images/paras_1.png",
      "/images/paras_2.png",
      "/images/paras_3.png",
      "/images/paras_4.png",
    ],
  },
];
