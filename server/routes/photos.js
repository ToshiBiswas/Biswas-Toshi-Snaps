import express from "express";
import fs from "fs";
import {v4 as uuidv4} from "uuid";
const routerPhoto = express.Router();

const {PHOTO_PATH} = process.env;

function readPhotoPath(){
    return JSON.parse(fs.readFileSync(PHOTO_PATH, "utf8"));
}
function isString(input) {
    return typeof input === "string" && input.trim().length > 0;
}
  

routerPhoto.get("/", (req, res) => {
    const photos = readPhotoPath();
    
    // Remove comments but keep photographer and timestamp
    const formattedPhotos = photos.map(({ comments, ...photo }) => photo);

    res.status(200).json(formattedPhotos);
});


routerPhoto.get("/:id", (req, res) => {
    const photos = readPhotoPath();
    const photo = photos.find(p => p.id === req.params.id);

    if (!photo) {
        return res.status(404).json({ error: "Photo not found" });
    }

    // Exclude comments but keep timestamp and photographer
    const { comments, ...photoData } = photo;
    res.status(200).json(photoData);
});

routerPhoto.get("/:id/comments", (req, res) => {
    const photos = readPhotoPath();
    const photo = photos.find(p => p.id === req.params.id);

    if (!photo) {
        return res.status(404).json({ error: "Photo not found" });
    }

    res.status(200).json(photo.comments || []);
});

routerPhoto.post("/:id/comments", (req, res) => {
    const { name, comment } = req.body;

    if (!isString(name) || !isString(comment)) {
        return res.status(400).json({ error: "Name and comment must be non-empty strings" });
    }

    const photos = readPhotoPath();
    const photoIndex = photos.findIndex(p => p.id === req.params.id);

    if (photoIndex === -1) {
        return res.status(404).json({ error: "Photo not found" });
    }

    const newComment = {
        id: uuidv4(),
        name,
        comment,
        timestamp: Date.now(),
    };

    photos[photoIndex].comments.push(newComment);

    // Save the updated data
    fs.writeFileSync(PHOTO_PATH, JSON.stringify(photos, null, 2));

    res.status(201).json(newComment);
});

export default routerPhoto;
/*    
    const {category} = req.body;
    console.log(category);

    if(!category) {
        return res.status(404).send("ERROR: Ph is missing");
      } else if (!isString(category)) {
        return res.status(404).send("ERROR: Category must be a non-empty string")
    }

    console.log(category);
    const categoryData = readCategoryPath();

    categoryData.push(category);
    fs.writeFileSync(CATEGORY_PATH, JSON.stringify(categoryData));

    res.status(201).json(category);
*/