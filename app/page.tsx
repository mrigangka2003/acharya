import HeroSection from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data";
import { title } from "process";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div>
          <h2>Powerful Features for Your Career Growth</h2>
          <div>
            {
              features.map((feature,index)=>{
                return (
                  <Card>
                    <CardContent>
                      <div key={title}>{feature.icon}
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}
