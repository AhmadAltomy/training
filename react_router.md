# React router v6

## Installation

```bash
npm install react-router@next react-router-dom@next
```

## Usage

```tsx title="src/App.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Tips and Tricks

1. By default, the `Route` component will match the path exactly. To make the route match any path that starts with the specified path, use the `*` wildcard.
2. To make the route match any path, use the `/*` wildcard.
3. You use hooks like `useParams` and `useLocation` to access the route parameters and location.
4. You can use the `useNavigate` hook to navigate to a specific route.
5. You can use the `useMatch` hook to check if the current route matches a specific path.
6. A route can have multiple children routes, and each child route can have its own children routes.
7. Wrap the `Routes` component with the `Suspense` component to lazy load the routes.
8. Define a `NotFound` component and use it as a fallback route to handle 404 errors.
9. Define a `Layout` component and use it as a wrapper for the `Routes` component to add a header and footer to all routes.
10. Use the `useRoutes` hook to define routes in a separate file and use them in the `Routes` component.

## Resources

- [React Router](https://reactrouter.com/en/main)

## Additional Information

- [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React Router v6 API](https://reactrouter.com/docs/en/v6/api)

## Examples

### Example 1

```tsx title="src/App.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Example 2

```tsx title="src/App.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Example 3

```tsx title="src/App.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

