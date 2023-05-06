import bigUrl from "../assets/images/tour-image-big-min.jpg";
import user1 from "../assets/images/people1k-1-min.png";
import user2 from "../assets/images/people1k-2-min.png";
import user3 from "../assets/images/people1k-3-min.png";

const sellSlidesData = [
  {
    id: 1,
    photos: [
      "https://i.pinimg.com/564x/b1/18/8e/b1188e653a12110cce9b32bba1e10072.jpg",
      "https://i.pinimg.com/564x/85/40/f8/8540f8c696b87186de91e8608fc16bf2.jpg",
      "https://i.pinimg.com/564x/9e/7c/f7/9e7cf7295e6db710bd0d34338997d6c7.jpg",
      "https://i.pinimg.com/564x/71/c6/66/71c66693282d95685cf17f81b2c8161e.jpg",
    ],

    url1: "https://i.pinimg.com/564x/b1/18/8e/b1188e653a12110cce9b32bba1e10072.jpg",
    url2: "https://i.pinimg.com/564x/85/40/f8/8540f8c696b87186de91e8608fc16bf2.jpg",
    url3: "https://i.pinimg.com/564x/9e/7c/f7/9e7cf7295e6db710bd0d34338997d6c7.jpg",
    url4: "https://i.pinimg.com/564x/71/c6/66/71c66693282d95685cf17f81b2c8161e.jpg",
    houseDetail: {
      bedrooms: 4,
      bathrooms: 4,
      carPort: 1,
      floors: 2,
    },
    user: {
      avatar: user1,
      userName: "Dianne Russell",
      location: "Manager Director",
      tel: "tel:+380685138936",
    },
  },
  {
    id: 2,
    photos: [
      bigUrl,
      "https://i.pinimg.com/564x/f9/2e/d7/f92ed700858447436497a072c70cd4c6.jpg",
      "https://i.pinimg.com/564x/89/dc/1d/89dc1d70c121e8ab81b81f601b581a04.jpg",
      "https://i.pinimg.com/564x/b4/e8/aa/b4e8aa87c3ad8bb98138bd351dceca8d.jpg",
    ],
    url1: bigUrl,
    url2: "https://i.pinimg.com/564x/f9/2e/d7/f92ed700858447436497a072c70cd4c6.jpg",
    url3: "https://i.pinimg.com/564x/89/dc/1d/89dc1d70c121e8ab81b81f601b581a04.jpg",
    url4: "https://i.pinimg.com/564x/b4/e8/aa/b4e8aa87c3ad8bb98138bd351dceca8d.jpg",
    houseDetail: {
      bedrooms: 5,
      bathrooms: 2,
      carPort: 2,
      floors: 2,
    },
    user: {
      avatar: user2,
      userName: "Robert Fox",
      location: "Head of Marketing",
      tel: "tel:+380667119408",
    },
  },
  {
    id: 3,
    photos: [
      "https://i.pinimg.com/564x/71/29/de/7129de7d1b64eeee58544041fe76eec5.jpg",
      "https://i.pinimg.com/564x/cd/e1/58/cde158d93ffff00be75164ec111cb2c7.jpg",
      "https://i.pinimg.com/564x/a0/13/22/a013226adbe9aeff08cdccc701671b85.jpg",
      "https://i.pinimg.com/564x/29/51/08/2951084ad107a10e2b943ac04601067d.jpg",
    ],
    url1: "https://i.pinimg.com/564x/71/29/de/7129de7d1b64eeee58544041fe76eec5.jpg",
    url2: "https://i.pinimg.com/564x/cd/e1/58/cde158d93ffff00be75164ec111cb2c7.jpg",
    url3: "https://i.pinimg.com/564x/a0/13/22/a013226adbe9aeff08cdccc701671b85.jpg",
    url4: "https://i.pinimg.com/564x/29/51/08/2951084ad107a10e2b943ac04601067d.jpg",
    houseDetail: {
      bedrooms: 4,
      bathrooms: 4,
      carPort: 2,
      floors: 3,
    },
    user: {
      avatar: user3,
      userName: "Courtney Henry",
      location: "CEO Andarafish",
      tel: "tel:+380685138936",
    },
  },
];

export default sellSlidesData;
