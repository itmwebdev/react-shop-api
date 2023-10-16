import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Sofia+Sans:wght@300;500;700&display=swap");
body {
  background: var(--bg);
  font-size: 16px;
  line-height: 16px;
  font-family: Montserrat, Roboto, sans-serif;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  color: #fff;
  font-weight: 500;
  padding-bottom: 20px;
}
  :root {
    --bg: #212123;
    --dark: #191919;
    --dark-sea: #576067;
    --grey: #b8b8b8;
    --white: #fff;
    --violet: #8b57c6;
    --violet-dark: #6c3eb8;
    --light: #f6f6f7;
    --sea: #616e74;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

input,
button {
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-family: Montserrat, Roboto, sans-serif;
}

a {
  color: #fff;
  text-decoration: none;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.app {
  width: 1274px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.icon {
  width: 12px;
  height: 12px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

section {
  background: var(--dark);
  border-radius: 6px;
}

button {
  background: var(--violet-dark);
  border-radius: 6px;
  padding: 9px 20px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}

button:hover {
  background: var(--violet);
}

h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input {
  padding: 0;
}

.preloader {
  flex-grow: 1;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}


`;