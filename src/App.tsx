import { useEffect, useState } from "react";
import { getData } from "./utils";
import { Daum, INITIAL_STATE } from "../src/interfaces/agents";
import { Card } from "./components";

export const App = () => {
  const [agents, setAgents] = useState<INITIAL_STATE["agents"]>([]);

  const getAgents = async () => {
    const data = await getData(import.meta.env.VITE_BASE_URL);
    setAgents(data.data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">Valorant Agents</h1>

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {agents.length > 0 &&
          agents.map((agent: Daum) => <Card key={agent.uuid} data={agent} />)}
      </div>
    </div>
  );
};

export default App;
