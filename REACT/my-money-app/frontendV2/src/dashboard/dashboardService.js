import axios from "axios";
const BASE_URL = "http://localhost:3003/api";

export async function getSummary() {
  const response = await axios.get(`${BASE_URL}/billingCycles/summary`);
  return response ? response.data : response;
}
