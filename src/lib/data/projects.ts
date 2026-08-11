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
    url: "",
    images: [
      "/images/paras_1.png",
      "/images/paras_2.png",
      "/images/paras_3.png",
      "/images/paras_4.png",
    ],
  },
  {
    id: 3,
    name: "YT Scripts",
    url: "https://www.yt-scripts.online/",
    images: ["/images/yt_scripts_1.png"],
  },
  {
    id: 4,
    name: "Jarvis AI",
    url: "",
    images: ["/images/jarvis_ai_1.png"],
  },
  {
    id: 5,
    name: "ERP POS",
    url: "",
    images: ["/images/erp_pos_1.png"],
  },
];
