# Reaction Time Test

A simple web-based application that measures your reaction time in milliseconds.

## Overview

This project tests how quickly you can react to visual stimuli. The test displays a button that changes color, and you need to click it as soon as it turns green. Your reaction time is then displayed in milliseconds.

## Features

- **Randomized Timing**: The button changes from red to green at random intervals
- **Early Click Detection**: Prevents cheating by detecting if you click too early
- **Visual Feedback**: Clear color-coded states (blue=ready, red=wait, green=click)
- **Real-time Measurement**: Accurate timing in milliseconds

## How to Use

1. Open `reaction_time.html` in your web browser
2. Click the blue button to start the test
3. Wait for the button to turn from red to green
4. Click the button as soon as it turns green
5. View your reaction time in milliseconds
6. Click the button again to try another test

## File Structure



## Game States

- **Blue State**: Ready to start the test
- **Red State**: Waiting for the green signal (clicking now counts as too early)
- **Green State**: Time to click! Your reaction time is being measured

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- Uses `Date.now()` for accurate timing measurements
- Responsive design with flexbox layout
- Random delay between 0-6 seconds before turning green

## Browser Compatibility

Compatible with all modern browsers that support:
- ES6 JavaScript
- Flexbox CSS
- DOM manipulation

## License

Open source - feel free to modify and distribute.
