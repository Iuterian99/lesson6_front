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

const Airport_reyses = gql`
  query airport_reyses($airport_id: ID!) {
    airport_reyses(airport_id: $airport_id) {
      reyse_to
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(Airports);
  const { data: reysData } = useQuery(Airport_reyses, {
    variables: { airport_id: "d64b800d-d3a6-4e01-8cd1-4d576ac7118e" },
  });
  console.log(reysData);

  return (
    <>
      {loading && <>loading</>}
      {error && <>error</>}
      {data && data.airports.map((e, i) => <h3 key={i}>{e.airport_name}</h3>)}
    </>
  );
}

export default App;
