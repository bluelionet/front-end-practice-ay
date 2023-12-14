# Introduction

This is a front-end practice which implements two number-input-like components: **`<CustomInputNumber />`** and **`<RoomAllocation />`**, using **React**.

You can:

- **Type in the input box** to change a number value.
- **Click the plus/minus button** to change a number value.
- **Change a room's adult/child number** to see the information and UI changes.

# Live Demo

https://front-end-practice-ay.vercel.app/

# Installation

1. `git clone` repository to your local environment.
1. `npm install` to install packages.
1. `npm start` and this practice should show up!

# Source Files Explanation

- `/src/App.js`: Root component.
- `/src/App.css`: Root CSS file.
- `/src/components/CustomInputNumber.js`: CustomInputNumber component.
- `/src/components/Room.js`: Room component. (Used inside RoomAllocation component.)
- `/src/components/RoomAllocation.js`: RoomAllocation component.

# Things To Be Refined

- [ ] Implement the functionality of increasing/decreasing value continuously when user keep pressing the plus/minus button.
