import { CardSection } from "../components/CardSection";
import { Crousel } from "../components/Crousel";
import clothsData from "../services/Cloths.json";
import accessoriesData from "../services/Accessories.json";
export const Home = () => {
  const title = "Clothing For Men And Women";
  const title2 = "Accessories For Men And Women";

  return (
    <div>
      <Crousel />
      <CardSection title={title} data={clothsData} />
      <CardSection title={title2} data={accessoriesData} />
    </div>
  );
};
