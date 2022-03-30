import "./App.css";
import { useQuery, gql } from "@apollo/client";
const Airports = gql`
  query {
    airports {
      airport_id
      airport_name
      airport_location
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(Airports);
  console.log(data);

  return <>salom</>;
}

export default App;
