# CineScope

A responsive movie discovery application built using React.js and the OMDb API. Search for movies and explore their details, ratings, genres, plots and cast information.

## Features

- Search movies by title.
- Display movie posters, titles and release years.
- View detailed movie information.
- Display IMDb ratings with star representations.
- Interactive movie details popup.
- Loading indicators and error handling.
- Responsive user interface.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- OMDb REST API
- Vite

## Project Structure

```text
CineScope/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── MovieDetails.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── api.js
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/AshutoshKumar946/CineScope.git
```

2. Navigate to the project directory:

```bash
cd CineScope
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and add your OMDb API key:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL displayed in your terminal.

## API Reference

Movie information is retrieved from the [OMDb API](https://www.omdbapi.com/).

## Author

Ashutosh Kumar

## License

This project is created for academic and learning purposes.