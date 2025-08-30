"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  onSelect,
  data,
  isLoading,
}: FilterCarouselProps) => {
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    return (
    <div className="relative w-full">
      {/* Left fade */}
      <div
          className={cn(
              "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
              current === 1 && "hidden"
          )}
      />
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {!isLoading && (
            <CarouselItem
              className="pl-3 basis-auto"
            >
              <Badge
                variant={!value ? "default" :"secondary"}
                className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
              >
                All
              </Badge>
            </CarouselItem>
          )}
          {!isLoading && data.map((item) => (
              <CarouselItem
                  key={item.value}
                  className="pl-3 basis-auto"
                  onClick={() => onSelect(item.value)}
              >
                <Badge
                    variant={value === item.value ? "default" : "secondary"}
                    className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                >
                  {item.label}
                </Badge>
              </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* Right fade */}
      <div
        className={cn(
            "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
            current === count && "hidden"
        )}
      />
    </div>
    )
}
