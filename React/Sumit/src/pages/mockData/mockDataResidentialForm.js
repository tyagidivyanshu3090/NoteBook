export const districts = [
  // Maharashtra (14)
  { id: "MH01", name: "Pune", stateCode: "14" },
  { id: "MH02", name: "Mumbai", stateCode: "14" },
  { id: "MH03", name: "Nagpur", stateCode: "14" },
  { id: "MH04", name: "Nashik", stateCode: "14" },

  // Karnataka (11)
  { id: "KA01", name: "Bengaluru Urban", stateCode: "11" },
  { id: "KA02", name: "Mysuru", stateCode: "11" },
  { id: "KA03", name: "Mangaluru", stateCode: "11" },
  { id: "KA04", name: "Belagavi", stateCode: "11" },

  // Uttar Pradesh (26)
  { id: "UP01", name: "Lucknow", stateCode: "26" },
  { id: "UP02", name: "Varanasi", stateCode: "26" },
  { id: "UP03", name: "Agra", stateCode: "26" },
  { id: "UP04", name: "Kanpur", stateCode: "26" },

  // Gujarat (07)
  { id: "GJ01", name: "Ahmedabad", stateCode: "07" },
  { id: "GJ02", name: "Surat", stateCode: "07" },
  { id: "GJ03", name: "Vadodara", stateCode: "07" },
];

export const subDistricts = [
  // Pune (MH01)
  { id: "PNSD01", name: "Haveli", districtId: "MH01" },
  { id: "PNSD02", name: "Mulshi", districtId: "MH01" },
  { id: "PNSD03", name: "Maval", districtId: "MH01" },

  // Mumbai (MH02)
  { id: "MMSD01", name: "Andheri", districtId: "MH02" },
  { id: "MMSD02", name: "Borivali", districtId: "MH02" },
  { id: "MMSD03", name: "Kurla", districtId: "MH02" },

  // Bengaluru Urban (KA01)
  { id: "BUSD01", name: "Bengaluru South", districtId: "KA01" },
  { id: "BUSD02", name: "Bengaluru North", districtId: "KA01" },
  { id: "BUSD03", name: "Anekal", districtId: "KA01" },

  // Lucknow (UP01)
  { id: "LKSD01", name: "Lucknow", districtId: "UP01" },
  { id: "LKSD02", name: "Mohanlalganj", districtId: "UP01" },

  // Ahmedabad (GJ01)
  { id: "AHSD01", name: "Ahmedabad City", districtId: "GJ01" },
  { id: "AHSD02", name: "Daskroi", districtId: "GJ01" },
];

export const towns = [
  // Haveli (PNSD01)
  {
    id: "TV01",
    name: "Wagholi",
    subDistrictId: "PNSD01",
    type: "Village",
    wardCode: null,
  },
  {
    id: "TV02",
    name: "Kharadi",
    subDistrictId: "PNSD01",
    type: "Town",
    wardCode: "W789",
  },
  {
    id: "TV03",
    name: "Hinjewadi",
    subDistrictId: "PNSD01",
    type: "Town",
    wardCode: "W790",
  },

  // Mulshi (PNSD02)
  {
    id: "TV04",
    name: "Lavale",
    subDistrictId: "PNSD02",
    type: "Village",
    wardCode: null,
  },
  {
    id: "TV05",
    name: "Bhugaon",
    subDistrictId: "PNSD02",
    type: "Village",
    wardCode: null,
  },

  // Andheri (MMSD01)
  {
    id: "TV06",
    name: "Versova",
    subDistrictId: "MMSD01",
    type: "Town",
    wardCode: "W456",
  },
  {
    id: "TV07",
    name: "Juhu",
    subDistrictId: "MMSD01",
    type: "Town",
    wardCode: "W457",
  },

  // Bengaluru South (BUSD01)
  {
    id: "TV08",
    name: "JP Nagar",
    subDistrictId: "BUSD01",
    type: "Town",
    wardCode: "W123",
  },
  {
    id: "TV09",
    name: "BTM Layout",
    subDistrictId: "BUSD01",
    type: "Town",
    wardCode: "W124",
  },
  {
    id: "TV10",
    name: "Kengeri",
    subDistrictId: "BUSD01",
    type: "Village",
    wardCode: null,
  },

  // Lucknow (LKSD01)
  {
    id: "TV11",
    name: "Gomti Nagar",
    subDistrictId: "LKSD01",
    type: "Town",
    wardCode: "W999",
  },
  {
    id: "TV12",
    name: "Hazratganj",
    subDistrictId: "LKSD01",
    type: "Town",
    wardCode: "W998",
  },

  // Ahmedabad City (AHSD01)
  {
    id: "TV13",
    name: "Maninagar",
    subDistrictId: "AHSD01",
    type: "Town",
    wardCode: "W555",
  },
  {
    id: "TV14",
    name: "Navrangpura",
    subDistrictId: "AHSD01",
    type: "Town",
    wardCode: "W556",
  },
];
