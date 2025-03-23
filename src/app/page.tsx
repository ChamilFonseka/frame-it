import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Frame Your Memories in Style
                  </h1>
                  <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                    Upload your favorite photos and choose from our premium selection of frames. Delivered right to your
                    doorstep.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <Button size="lg" className="w-full sm:w-auto">
                    Upload Your Photo
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse Frames
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                <div className="w-56 h-72 border-10 border-foreground rounded-lg drop-shadow-2xl shadow-2xl">
                  <Image src="/placeholder.svg" alt="" fill className="object-cover" />
                </div>
                <div className="w-56 h-72 border-10 border-background rounded-lg drop-shadow-lg shadow-lg">
                  <Image src="/placeholder.svg" alt="" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
