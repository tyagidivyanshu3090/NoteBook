// 1. Create the context with an empty object as a fallback.
const AppContext = React.createContext({});

// 2. In your main App component, provide the real, dynamic value.
function App() {
  const [user, setUser] = useState({ name: "Guest" });
  const [theme, setTheme] = useState("light");

  const realValue = { user, theme, setUser, setTheme };

  return (
    // The Provider supplies the real data.
    <AppContext.Provider value={realValue}>
      <Header />
      <UserProfile />
    </AppContext.Provider>
  );
}

// 3. Any child component can now consume the context.
function UserProfile() {
  // This will receive the `realValue` object, NOT the empty object.
  const { user } = useContext(AppContext);

  return <h1>Welcome, {user.name}</h1>;
}
