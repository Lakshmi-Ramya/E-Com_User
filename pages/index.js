import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredproduct,newProducts}) {
  return(
    <div>
      <Header />
      <Featured product={featuredproduct}/>
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64e39617f3d4580fe7f0ca6d';
  await mongooseConnect();
  const featuredproduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return{
    props: {featuredproduct: JSON.parse(JSON.stringify(featuredproduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}