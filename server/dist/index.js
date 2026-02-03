"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 100,
            text: " Freshly boiled eggs served with light seasoning, rich in protein andperfect for a healthy and energetic breakfast.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 250,
            text: "Delicious ramen noodles cooked in a flavorful broth, topped with fresh vegetables and spices for a comforting meal.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 450,
            text: "Tender grilled chicken marinated with spices, cooked to perfection for a smoky and satisfying taste. ",
            
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 180,
            text: "Soft and creamy cake layered with rich frosting, made to satisfy yoursweet cravings and special moments. ",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 230,
            text: "Juicy burger packed with fresh veggies, melted cheese, and a perfectly cooked patty, served in a soft bun.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 250,
            text: " Fluffy pancakes stacked and served with syrup, offering a sweet and delightful start to your day.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map