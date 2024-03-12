// import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";



const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <Link className="btn btn-lg btn-info m-2" to="/encounter">
                {/* TODO: display the user's username */} Start Encounter
      </Link>      
    </main>
  );
};

export default Home;



