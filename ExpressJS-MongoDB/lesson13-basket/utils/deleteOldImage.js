const fs = require("fs");
const path = require("path");

function deleteManyOldImage(imagePath) {
  imagePath.map((item) => {
    const fullImagePath = path.join(item);
    fs.unlink(fullImagePath, (err) => {
      if (err) {
        console.error("An error occurred while deleting the many images:", err);
      } else {
        console.log("Old many images deleted successfully");
      }
    });
  });
}

function deleteSingleOldImage(imagePath) {
  const fullImagePath = path.join(imagePath);
  fs.unlink(fullImagePath, (err) => {
    if (err) {
      console.error("An error occurred while deleting the image:", err);
    } else {
      console.log("Old image deleted successfully");
    }
  });
}

module.exports = { deleteManyOldImage, deleteSingleOldImage }
