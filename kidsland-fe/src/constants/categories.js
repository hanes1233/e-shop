
export const TOYS = [
    { name: "Cars", path: "/toys/cars" },
    { name: "Dolls", path: "/toys/dolls" },
    { name: "Plushies", path: "/toys/plushies" },
    { name: "Building blocks", path: "/toys/building" },
    { name: "Educational", path: "/toys/educational" },
    { name: "LEGO", path: "/toys/lego" }
];

export const ACCESSORIES = [
    { name: "School", path: "/accessories/school" },
    { name: "Party", path: "/accessories/decoration" },
    { name: "Creative", path: "/accessories/creative" },
    { name: "Tech", path: "/accessories/tech" }
];

export const FURNITURE = [
    { name: "Playroom", path: "/furniture/playroom" },
    { name: "Bedroom" , path: "/furniture/bedroom" },
    { name: "Outdoor", path: "/furniture/outdoor" },
    { name: "Wardrobes", path: "/furniture/wardrobes" }
]

export const BABIES = [
    { name: "Strollers", path: "/baby/strollers" },
    { name: "Clothing & Apparel", path: "/baby/clothes" },
    { name: "Toys & Games", path: "/baby/toys" },
    { name: "Feeding", path: "/baby/feeding" },
    { name: "Bath & Skincare", path: "/baby/bath"}
]

export function getCategories(category) {
    switch(category) {
        case 'toys' : return TOYS;
        case 'accessories' : return ACCESSORIES;
        case 'furniture' : return FURNITURE;
        case 'baby' : return BABIES;
        default: return checkDefaultSections(category);
    }
}

const checkDefaultSections = (category) => {
    if (category === 'shoes' || category === 'dress' || category === 'sport') {
        const defaultSections = [
            { name: "Boys", path: `/${category}/boys`},
            { name: "Girls", path: `/${category}/girls`}
        ]
        return defaultSections;
    }
    return null;
}