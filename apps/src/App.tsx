// Routes is used instead of the previous Switch component
// react router v6
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AnimalsApp from "./animals/App.tsx"
import BookListApp from "./BookList/App.tsx"
import ImageBrowserApp from "./ImageBrowser/App.tsx"

function Home() {
  return (
    <div>
      <h1>App Homepage</h1>
      <p>Apps to choose from are: animals and image browser</p>
    </div>
  )
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/animals" style={{ padding: 5 }}>
          Animals
        </Link>
        <Link to="/booklist" style={{ padding: 5 }}>
          Booklist
        </Link>
        <Link to="/image-browser" style={{ padding: 5 }}>
          Image Browser
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<AnimalsApp />} />
        <Route path="/booklist" element={<BookListApp />} />
        <Route path="/image-browser" element={<ImageBrowserApp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  )
}

export default App
