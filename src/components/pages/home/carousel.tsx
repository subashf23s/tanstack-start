import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import { DotButton, useCarouselDots } from "./carousel-dot";
import { NextButton, PrevButton, useCarouselButtons } from "./carousel-arrow";

type Props = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel = ({ slides, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselDots(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);
  return (
    <section>
      <div ref={emblaRef}>
        <div>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center p-6"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div>
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} onClick={() => onDotButtonClick(index)} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
