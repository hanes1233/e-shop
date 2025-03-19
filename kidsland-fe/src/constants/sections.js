import { boyImg, girlImg, tagImg } from "./images";

export const TOYS = {
    name: "Toys",
    path: "/toys",
    categories: [
        { name: "Cars", path: "/toys/cars" },
        { name: "Dolls", path: "/toys/dolls" },
        { name: "Plushies", path: "/toys/plushies" },
        { name: "Building blocks", path: "/toys/building" },
        { name: "Educational", path: "/toys/educational" },
        { name: "LEGO", path: "/toys/lego" }
    ]
}

export const SHOES = {
    name: "Shoes",
    path: "/shoes",
    categories: [
        { name: "Boys", path: "/shoes/boys", image: boyImg },
        { name: "Girls", path: "/shoes/girls", image: girlImg },
        { name: "Special offer", path: "/shoes/special", image: tagImg }
    ]
}

export const ACCESSORIES = {
    name: "Accessories",
    path: "/accessories",
    categories: [
        { name: "School", path: "/accessories/school" },
        { name: "Party", path: "/accessories/decoration" },
        { name: "Creative", path: "/accessories/creative" },
        { name: "Tech", path: "/accessories/tech" }
    ]
}

export const FURNITURE = {
    name: "Furniture",
    path: "/furniture",
    categories: [
        { name: "Playroom", path: "/furniture/playroom" },
        { name: "Bedroom", path: "/furniture/bedroom" },
        { name: "Outdoor", path: "/furniture/outdoor" },
        { name: "Wardrobes", path: "/furniture/wardrobes" },
        { name: "Special offer", path: "/furniture/special", image: tagImg }
    ]
}

export const BABIES = {
    name: "For babies",
    path: "/baby",
    categories: [
        { name: "Strollers", path: "/baby/strollers" },
        { name: "Clothing & Apparel", path: "/baby/clothes" },
        { name: "Toys & Games", path: "/baby/toys" },
        { name: "Feeding", path: "/baby/feeding" },
        { name: "Bath & Skincare", path: "/baby/bath" }
    ]
}

export const DRESS = {
    name: "Dress",
    path: "/dress",
    categories: [
        { name: "Boys", path: "/dress/boys", image: boyImg },
        { name: "Girls", path: "/dress/girls", image: girlImg },
        { name: "Special offer", path: "/dress/special", image: tagImg }
    ]
}

export const SPORT = {
    name: "Sport",
    path: "/sport",
    categories: [
        { name: "Boys", path: "/sport/boys", image: boyImg },
        { name: "Girls", path: "/sport/girls", image: girlImg },
        { name: "Special offer", path: "/sport/special", image: tagImg }
    ]
}

export function getSection(section) {
    switch (section) {
        case 'toys': return TOYS;
        case 'accessories': return ACCESSORIES;
        case 'furniture': return FURNITURE;
        case 'baby': return BABIES;
        case 'shoes': return SHOES;
        case 'dress': return DRESS;
        case 'sport': return SPORT;
        default: return null;
    }
}

export function getAllSections() {
    return [TOYS, SHOES, ACCESSORIES, FURNITURE, BABIES, DRESS, SPORT];
}