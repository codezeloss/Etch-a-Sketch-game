'use strict';

const colorModeBtn = document.querySelector('.color-mode');
const rainbowModeBtn = document.querySelector('.rainbow-mode');
const eraseModeBtn = document.querySelector('.eraser');
const clearModeBtn = document.querySelector('.clear');
const gridContainer = document.querySelector('.grid-container');

// Test if the browser supports the canvas element
// colorModeBtn.addEventListener('click', () => {
//   console.log('clicked');
// });
// rainbowBtn.addEventListener('click', () => {
//   console.log('clicked');
// });
// eraserBtn.addEventListener('click', () => {
//   console.log('clicked');
// });
// clearBtn.addEventListener('click', () => {
//   console.log('clicked');
// });

let gridArea;
let gridItem;

const createGrid = function (gridNumber) {
  gridArea = gridNumber * gridNumber;

  for (let i = 1; i <= gridArea; i++) {
    gridItem = document.createElement('div');

    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

    // gridItem.style.background = '#0f0f';
    gridItem.style.width = '100%';
    gridItem.style.height = '100%';
    gridItem.style.border = '0.5px solid grey';
    gridItem.style.cursor = 'pointer';
    gridContainer.appendChild(gridItem);
  }
};
createGrid(16);

//
let colorBtn = false;
let rainbowBtn = false;
let eraserBtn = false;
let clearBtn = false;

const colorGrid = function () {
  const gridBoxes = gridContainer.querySelectorAll('div');
  if (colorBtn === true) {
    gridBoxes.forEach(gridBox => {
      gridBox.addEventListener('mouseover', () => {
        gridBox.style.background = '#000';
      });
    });
  }

  if (rainbowBtn === true) {
    const gridBoxes = gridContainer.querySelectorAll('div');
    gridBoxes.forEach(gridBox => {
      gridBox.addEventListener('mouseover', () => {
        gridBox.style.background = `hsl(${Math.floor(
          Math.random() * 360
        )}, 100%, 50%)`;
      });
    });
  }

  if (eraserBtn === true) {
    const gridBoxes = gridContainer.querySelectorAll('div');
    gridBoxes.forEach(gridBox => {
      gridBox.addEventListener('mouseover', () => {
        gridBox.style.background = '#fff';
      });
    });
  }
};

const clearAll = function () {
  if (clearBtn === true) {
    const gridBoxes = gridContainer.querySelectorAll('div');
    gridBoxes.forEach(gridBox => {
      gridBox.style.background = '#fff';
    });
  }
};

//
colorModeBtn.addEventListener('click', () => {
  colorBtn = true;
  colorGrid();
});

rainbowModeBtn.addEventListener('click', () => {
  rainbowBtn = true;
  colorGrid();
});

eraseModeBtn.addEventListener('click', () => {
  colorBtn = false;
  rainbowBtn = false;
  eraserBtn = true;
  colorGrid();
});

clearModeBtn.addEventListener('click', () => {
  clearBtn = true;
  clearAll();
  colorGrid();
});
