// Helper to generate numeric options for dropdowns
const generateNumericOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push([String(i), String(i)]);
  }
  return options;
};

// Defines which fields appear on which step of the form.
export const fieldStages = [
  [
    "nameOfHead",
    "sex",
    "socialCategory",
    "houseOwnership",
    "dwellingRooms",
    "marriedCouples",
  ],
  [
    "drinkingWaterSource",
    "drinkingWaterAvailability",
    "lightingSource",
    "latrineAccess",
    "latrineType",
    "wasteWaterOutlet",
    "bathingFacility",
    "kitchenAndLPG",
    "cookingFuel",
  ],
  [
    "radio",
    "television",
    "internetAccess",
    "laptop",
    "phone",
    "bikeScooter",
    "car",
    "cereal",
  ],
];

// Labels for each step in the stepper.
export const stepLabels = [
  "General form",
  "Amenities available to the household",
  "Assets possessed by the household",
];

// Detailed configuration for every form field.
export const fields = [
  // --- Step 1: General form ---
  {
    id: "nameOfHead",
    label: "Name of the Head",
    type: "text",
  },
  {
    id: "sex",
    label: "Sex",
    type: "select",
    options: [
      ["1", "Male"],
      ["2", "Female"],
      ["3", "Transgender person"],
    ],
  },
  {
    id: "socialCategory",
    label: "Social Category",
    type: "select",
    options: [
      ["1", "SC"],
      ["2", "ST"],
      ["3", "Other"],
    ],
  },
  {
    id: "houseOwnership",
    label: "Ownership status of this house",
    type: "select",
    options: [
      ["1", "Owned"],
      ["2", "Rented but has own house elsewhere"],
      ["3", "Rented and doesn’t own any house"],
      ["4", "Any other"],
    ],
  },
  {
    id: "dwellingRooms",
    label:
      "Number of dwelling rooms exclusively in possession of the household",
    type: "select",
    options: generateNumericOptions(0, 9),
  },
  {
    id: "marriedCouples",
    label: "No. of Married Couple(s) living in this household",
    type: "select",
    options: generateNumericOptions(0, 9),
  },
  // --- Step 2: Amenities ---
  {
    id: "drinkingWaterSource",
    label: "Main source of drinking water",
    type: "select",
    options: [
      ["1", "Tap water from treated source"],
      ["2", "Tap water from un-treated source"],
      ["3", "Well"],
      ["4", "Hand Pump"],
      ["5", "Tubewell/ borehole"],
      ["6", "Spring"],
      ["7", "River/canal"],
      ["8", "Tank/pond/lake"],
      ["9", "Packaged/bottled water"],
      ["10", "Other sources"],
    ],
  },
  {
    id: "drinkingWaterAvailability",
    label: "Availability of drinking water source",
    type: "select",
    options: [
      ["1", "Within premises"],
      ["2", "Near the premises"],
      ["3", "Away"],
    ],
  },
  {
    id: "lightingSource",
    label: "Main source of lighting",
    type: "select",
    options: [
      ["1", "Electricity"],
      ["2", "Kerosene"],
      ["3", "Solar"],
      ["4", "Other oil"],
      ["5", "Any other"],
      ["6", "No lighting"],
    ],
  },
  {
    id: "latrineAccess",
    label: "Access to latrine",
    type: "select",
    options: [
      ["1", "Exclusively for household use only"],
      ["2", "Shared with other household"],
      ["3", "Public latrine"],
      ["4", "Open"],
    ],
  },
  {
    id: "latrineType",
    label: "Type of latrine",
    type: "select",
    options: [
      ["1", "Flush/pour flush latrine connected to Piped sewer system"],
      ["2", "Septic tank"],
      ["3", "Other system"],
      ["4", "Twin Pit latrine: With slab/ventilated improved pit"],
      ["5", "Twin Pit latrine: Without slab/open pit"],
      ["6", "Single Pit latrine: With slab/ventilated improved pit"],
      ["7", "Single Pit latrine: Without slab/open pit"],
      ["8", "Service latrine: Night soil removed by human"],
      ["9", "Service latrine: Night soil serviced by animals"],
      ["10", "Service latrine: Night soil disposed into open drain"],
    ],
  },
  {
    id: "wasteWaterOutlet",
    label: "Waste water outlet connected to",
    type: "select",
    options: [
      ["1", "Closed drainage"],
      ["2", "Open drainage"],
      ["3", "No drainage"],
    ],
  },
  {
    id: "bathingFacility",
    label: "Bathing facility available within the premises",
    type: "select",
    options: [
      ["1", "Bathroom"],
      ["2", "Enclosure without roof"],
      ["3", "No"],
    ],
  },
  {
    id: "kitchenAndLPG",
    label: "Availability of kitchen and LPG/PNG connection",
    type: "select",
    options: [
      ["1", "Cooking in kitchen: Has LPG/PNG Connection"],
      ["2", "Cooking in kitchen: Doesn’t have LPG/PNG Connection"],
      ["3", "Cooking inside house, but not in kitchen: Has LPG/PNG Connection"],
      [
        "4",
        "Cooking inside house, but not in kitchen: Doesn’t have LPG/PNG Connection",
      ],
      ["5", "Cooking in open/ outside house: Has LPG/PNG Connection"],
      ["6", "Cooking in open/ outside house: Doesn’t have LPG/PNG Connection"],
      ["7", "No cooking"],
    ],
  },
  {
    id: "cookingFuel",
    label: "Main fuel used for cooking",
    type: "select",
    options: [
      ["1", "Firewood"],
      ["2", "Crop residue"],
      ["3", "Cowdung cake"],
      ["4", "Coal/lignite/ charcoal"],
      ["5", "Kerosene"],
      ["6", "LPG/PNG"],
      ["7", "Electricity"],
      ["8", "Bio-gas"],
      ["9", "Solar"],
      ["10", "Any other"],
    ],
  },
  // --- Step 3: Assets ---
  {
    id: "radio",
    label: "Radio/Transistor",
    type: "select",
    options: [
      ["1", "Traditional radio set"],
      ["2", "On mobile/smartphone"],
      ["3", "On any other device"],
      ["4", "No"],
    ],
  },
  {
    id: "television",
    label: "Television",
    type: "select",
    options: [
      ["1", "Doordarshan free dish"],
      ["2", "Other DTH/Dish"],
      ["3", "Cable connection"],
      ["4", "Any other"],
      ["5", "No Television"],
    ],
  },
  {
    id: "internetAccess",
    label: "Access to internet",
    type: "select",
    options: [
      ["1", "On laptop/Computer"],
      ["2", "On mobile/smartphone"],
      ["3", "No"],
    ],
  },
  {
    id: "laptop",
    label: "Laptop/computer",
    type: "select",
    options: [
      ["1", "Yes"],
      ["2", "No"],
    ],
  },
  {
    id: "phone",
    label: "Telephone and Mobile Phone/Smartphone",
    type: "select",
    options: [
      ["1", "Landline only"],
      ["2", "Smartphone only"],
      ["3", "Basic mobile only"],
      ["4", "Both Landline and Mobile"],
      ["5", "No"],
    ],
  },
  {
    id: "bikeScooter",
    label: "Bicycle and Scooter/Motorcycle/Moped",
    type: "select",
    options: [
      ["1", "Bicycle"],
      ["2", "Scooter/ Motorcycle/ Moped"],
      ["3", "Both"],
      ["4", "None"],
    ],
  },
  {
    id: "car",
    label: "Car/Jeep/ Van",
    type: "select",
    options: [
      ["1", "Yes"],
      ["2", "No"],
    ],
  },
  {
    id: "cereal",
    label: "Main cereal consumed in the household",
    type: "select",
    options: [
      ["1", "Rice"],
      ["2", "Wheat"],
      ["3", "Jowar"],
      ["4", "Bajra"],
      ["5", "Maize"],
      ["6", "Any other"],
    ],
  },
];
