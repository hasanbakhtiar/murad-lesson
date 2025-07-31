const fs = require('fs');
const path = require('path');

function deleteSingleOldImage(imagePath) {
  const fullImagePath = path.join(imagePath);
  fs.unlink(fullImagePath, (err) => {
    if (err) {
      console.log('An error occurred while deleteing the image');
    } else {
      console.log('Old single image deleted successfully');
    }
  });
}
module.exports = { deleteSingleOldImage };
