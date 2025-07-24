import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";

const StateSelector = ({ stateId, setStateId, statesList }) => {
  return (

 <Grid item xs={12} sm={3}>
                        <InputLabel shrink={false} htmlFor="state">
                            <Typography variant='body1'>State/Province*</Typography>
                        </InputLabel>
                        <FormControl variant="outlined" size="small" sx={{ width: '100%', mt: 1 }}>
                            <Select
                                id="state"
                                required
                                displayEmpty
                                value={stateId}
                                onChange={(e) => setStateId(e.target.value)}
                                name="state"
                            >
                                <MenuItem disabled value="">
                                    Select State/Province
                                </MenuItem>
                                {statesList.map((state) => (
          <MenuItem key={state.id} value={state.id}>
            {state.name}
          </MenuItem>
        ))}
                            </Select>
                          
                        </FormControl>
                    </Grid>



    //   <InputLabel id="state-select-label">Select State *</InputLabel>
    // <FormControl fullWidth size="small">
    
    //   <Select
    //     labelId="state-select-label"
    //     id="state-select"
    //     value={stateId}
    //     label="Select State *"
    //     onChange={(e) => setStateId(e.target.value)}
    //   >
    //     {statesList.map((state) => (
    //       <MenuItem key={state.id} value={state.id}>
    //         {state.name}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
};

export default StateSelector;
