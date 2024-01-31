// Routes is used instead of the previous Switch component
// react router v6
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import MuiTab from "@mui/material/Tab"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import AnimalsApp from "./animals/App.tsx"
import BookListApp from "./BookList/App.tsx"
import ImageBrowserApp from "./ImageBrowser/App.tsx"

// From Material UI Routing docs
// https://mui.com/material-ui/guides/routing/#tabs
function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

function Home() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>Multi-App Homepage</Typography>
      <Typography variant="body1">Apps to choose from are: animals and image browser</Typography>
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

function MyTabs() {
  // const theme = useTheme()

  const CustomTab = styled(MuiTab)(
    () => `
      color: #fff;
      opacity: 0.6;
      
      &[aria-selected="true"] {
        color: #fff;
        opacity: 1;
      }
    `,
  )

  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/animals",
    "/booklist",
    "/image-browser",
    "/",
  ])
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs value={currentTab}>
      <CustomTab label="Home" value="/" to="/" component={Link} />
      <CustomTab
        label="Animals"
        value="/animals"
        to="/animals"
        component={Link}
      />
      <CustomTab
        label="Booklist"
        value="/booklist"
        to="/booklist"
        component={Link}
      />
      <CustomTab
        label="Image Browser"
        value="/image-browser"
        to="/image-browser"
        component={Link}
      />
    </Tabs>
  )
}

function App() {
  return (
    <Router>
      <Box sx={{ width: "100%" }}>
        <AppBar position="fixed">
          <Toolbar>
            <MyTabs />
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: 10, mx: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<AnimalsApp />} />
            <Route path="/booklist" element={<BookListApp />} />
            <Route path="/image-browser" element={<ImageBrowserApp />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
