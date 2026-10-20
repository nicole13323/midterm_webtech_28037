# Bright Future Library – React Website

A minimal, responsive front-end (Design 2) website for the Bright Future Library, built with **React (functional components + JSX)**, **CSS3** and **Vite**.

## How to run

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server, then open the link shown (usually http://localhost:5173)
```

To create a production build: `npm run build` (output goes to `dist/`).

## Project structure

```
bright-future-library/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Puts all sections together
    ├── App.css                # All styling (CSS3, responsive)
    ├── data/
    │   └── libraryData.js     # Arrays for nav links, services, events, books, contact info
    └── components/
        ├── NavBar.jsx         # (b) Navigation menu
        ├── Header.jsx         # (a) Library name + mission statement
        ├── SectionTitle.jsx   # Reusable section heading
        ├── Intro.jsx          # (c) Welcome / About Us
        ├── Services.jsx       # (c) Services – rendered with map()
        ├── ServiceCard.jsx
        ├── Events.jsx         # (d) Upcoming events – rendered with map()
        ├── EventCard.jsx
        ├── FeaturedBooks.jsx  # (e) Featured books – rendered with map()
        ├── BookCard.jsx
        ├── Contact.jsx        # (f) Contact info + validated form (useState)
        └── Footer.jsx
```

## How each requirement is met

| Req. | Where | Notes |
|------|-------|-------|
| a | `Header.jsx` | Solid green header with serif title and mission |
| b | `NavBar.jsx` | Sticky white menu (active link underlined) linking to `#home`, `#about`, `#services`, `#events`, `#books`, `#contact`; links wrap on small screens |
| c | `Intro.jsx`, `Services.jsx` | Welcome text + 4 services as a numbered list |
| d | `Events.jsx` | 3 events in a date + details list |
| e | `FeaturedBooks.jsx` | 4 books with title, author, description and a cover (supports an `image` field) |
| f | `Contact.jsx` | Address, phone, email; form state, errors and success message all held in `useState`; required-field and email-format checks; `preventDefault()` stops submission when invalid |
| g | All | Functional components, props, `map()` over data arrays, CSS variables, Flexbox/Grid, media query at 700px |

## Adding book cover images

Put image files in a `public/covers/` folder and add an `image` field to a book in `libraryData.js`, e.g. `image: '/covers/things-fall-apart.jpg'`. Books without an image show a coloured book spine instead.
