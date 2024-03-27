function floodFill(image, x, y, newColor) {
  const targetColor = image[y][x];
  if (targetColor === newColor) {
    return image;
  }

  function paint(x, y) {
    if (x < 0 || y < 0 || x >= image[0].length || y >= image.length) {
      return;
    }

    if (image[y][x] !== targetColor) {
      return;
    }

    image[y][x] = newColor;

    paint(x - 1, y);
    paint(x + 1, y);
    paint(x, y - 1);
    paint(x, y + 1);
  }

  paint(x, y);
  return image;
}

// Utility function to display the image
function displayImage(image) {
  image.forEach(row => {
    console.log(row.join(''));
  });
  console.log('------');
}

// Test cases
const image = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.']
];

// Display the original image
console.log("Original Image");
displayImage(image);

// Test 1: Pixel (0,1) and new color 'O'
const newImage1 = floodFill(JSON.parse(JSON.stringify(image)), 0, 1, 'O');
console.log("After Test 1");
displayImage(newImage1);

// Test 2: Pixel (1,3) and new color 'o'
const newImage2 = floodFill(JSON.parse(JSON.stringify(image)), 1, 3, 'o');
console.log("After Test 2");
displayImage(newImage2);

// Test 3: Pixel (1,3) and new color '#'
const newImage3 = floodFill(JSON.parse(JSON.stringify(image)), 1, 3, '#');
console.log("After Test 3");
displayImage(newImage3);
