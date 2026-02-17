import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <main className="container mx-auto">
      <Carousel>
        <CarouselContent>
          <CarouselItem>one</CarouselItem>
          <CarouselItem>two</CarouselItem>
          <CarouselItem>three</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default Hero;
