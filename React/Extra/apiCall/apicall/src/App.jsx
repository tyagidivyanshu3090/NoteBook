import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";
import api from "../api/axios";

const App = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using axios
    api.get("todos/1").then((response) => {
      console.log("Data fetched successfully:", response.data);
    });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          📋 To-Do Details
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography>
              <strong>User ID:</strong> {todo.userId}
            </Typography>
            <Typography>
              <strong>To-Do ID:</strong> {todo.id}
            </Typography>
            <Typography>
              <strong>Title:</strong> {todo.title}
            </Typography>
            <Typography>
              <strong>Status:</strong>{" "}
              <Chip
                label={todo.completed ? "Completed" : "Incomplete"}
                color={todo.completed ? "success" : "warning"}
                variant="outlined"
              />
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default App;
