# Exploring the world

- **🏗 Monolith vs Microservice architecture**
- **Web App Data Fetching Approaches**
  - Wait then Render.
  - Render then Fetch and Re-render (preferred in React).
- **useEffect hook + CORS policy**
- **Shimmer UI**: Concept of displaying a skeleton/fake page during loading.
- **Understanding the useState variable** using login/logout in header

## Notes:

- map function only works with array. So the state variable will initialising shall be empty array rather than undefined, null or ""

```jsx
const [restaurantList, setRestaurantList] = useState([]);
// ✅ Use empty array so we can safely do .map()
// Avoids errors like "Cannot read property 'map' of undefined"
```

## Shimmer UI Code:

```jsx
{
  Array(12)
    .fill("")
    .map((_, index) => <Shimmer key={index} />);
}
```

- `Array(12)`: Creates a new array with 12 empty slots. Example: [empty × 12].
- `.fill("")`: Fills all those empty slots with "" (empty strings).
  - This makes it a real, usable array like: ["", "", "", ..., ""] (12 times).
