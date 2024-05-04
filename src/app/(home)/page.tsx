import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "./components/product-card";
import { dummyProducts } from "./components/DummyData";
export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image alt="pizza-main" src={'/pizza-main.png'} width={400} height={400} />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <Tabs defaultValue="Pizza" >
            <TabsList>
              <TabsTrigger value="Pizza" className="text-md">Pizza</TabsTrigger>
              <TabsTrigger value="Beverages" className="text-md">Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="Pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {dummyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {dummyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
