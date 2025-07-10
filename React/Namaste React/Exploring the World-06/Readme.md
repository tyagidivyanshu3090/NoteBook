# Exploring the world

- **🏗 Monolith vs Microservice architecture**
- **Web App Data Fetching Approaches**
  - Wait then Render.
  - Render then Fetch and Re-render (preferred in React).
- **useEffect hook + CORS policy**
- **Shimmer UI**: Concept of displaying a skeleton/fake page during loading.

## Notes:

- map function only works with array. So the state variable will initialising shall be empty array rather than undefined, null or ""

```jsx
const [restaurantList, setRestaurantList] = useState([]);
// ✅ Use empty array so we can safely do .map()
// Avoids errors like "Cannot read property 'map' of undefined"
```
