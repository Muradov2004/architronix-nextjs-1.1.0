const categoryMenuList = [
  {
    id: 1,
    name: "Ofis mebeli",
    path: "/ofis-mebeli",
    isDropdown: false,
    isMegaMenu: [
      { name: "Alt Kategori 1", path: "/ofis-mebeli/kategori-1" },
      { name: "Alt Kategori 2", path: "/ofis-mebeli/kategori-2" },
    ],
  },
  {
    id: 2,
    name: "Ev mebeli",
    path: "/ev-mebeli",
    isDropdown: true,
    isMegaMenu: [],
  },
  {
    id: 3,
    name: "HORECA",
    path: "/horeca",
    isDropdown: false,
    isMegaMenu: [],
  },
];
