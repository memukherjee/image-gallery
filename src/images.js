const images = [
  {
    key: "1",
    title: "Beach View",
    tag: ["sky", "beach"],
    url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    key: "2",
    title: "Misty Forest",
    tag: ["forest", "mist"],
    url: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    key: "3",
    title: "Orangy Butterfly",
    tag: ["butterfly", "insect"],
    url: "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "4",
    title: "Homemade Burger",
    tag: ["food", "burger"],
    url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "5",
    title: "Crocus Flower",
    tag: ["flower", "blue"],
    url: "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },

  {
    key: "6",
    title: "Palm Tree",
    tag: ["palm", "beach"],
    url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    key: "7",
    title: "Portrait",
    tag: ["model", "girl"],
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "8",
    title: "Fashion Model",
    tag: ["boy", "model"],
    url: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80",
  },
  {
    key: "9",
    title: "Gold Fish",
    tag: ["gold", "fish"],
    url: "https://images.unsplash.com/photo-1604859347436-2e6925be8176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    key: "10",
    title: "Indian Spices",
    tag: ["food", "spice"],
    url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "11",
    title: "Heaven Valley",
    tag: ["mountain", "valley"],
    url: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    key: "12",
    title: "Sunkissed Mountain",
    tag: ["mountain", "sunrise"],
    url: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80",
  },
  {
    key: "13",
    title: "Citylights",
    tag: ["city", "sunrise"],
    url: "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    key: "14",
    title: "Skyscrapers",
    tag: ["city", "scraper"],
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80",
  },
  {
    key: "15",
    title: "Wolverine",
    tag: ["wolf", "animal"],
    url: "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    key: "16",
    title: "Evening Ride",
    tag: ["bicycle", "ride", "sunset"],
    url: "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "17",
    title: "Breakfast",
    tag: ["food", "breakfast"],
    url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
  },
  {
    key: "18",
    title: "Rider",
    tag: ["ride", "bike", "biker"],
    url: "https://images.unsplash.com/photo-1516468107886-d834f9a85b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "19",
    title: "Unicorn",
    tag: ["horse", "landscape", "animal"],
    url: "https://images.unsplash.com/photo-1603017983624-070857c186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  },
  {
    key: "20",
    title: "Lily pad",
    tag: ["lily", "flower", "lotus"],
    url: "https://images.unsplash.com/photo-1499117901949-e34ef1b2444a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export default images;
