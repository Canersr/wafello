
'use client';

import { useMemo, useState, useEffect, useCallback, Fragment } from 'react';
import type { MenuItem } from '@/types';
import { MenuItemCard } from '@/components/menu-item-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

interface MenuProps {
  menuItems: MenuItem[];
  categories: string[];
}

// Bu kategoriler liste olarak gösterilecek
const listCategories = ['Sıcak İçecekler', 'Soğuk İçecekler', 'Ekstra Lezzetler'];

export function Menu({ menuItems, categories }: MenuProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  // Varsayılan kategoriyi Tümü yerine listenin ilk elemanı yap
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || '');

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect(api);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    // Kategoriyi seçtiğimizde karoseli o kategoriye kaydır
    const selectedIndex = categories.findIndex((c) => c === selectedCategory);
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex, true);
    }
  }, [api, selectedCategory, categories]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [menuItems, selectedCategory]);
  
  const groupedItems = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      const key = item.subcategory || 'Diğer';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {} as Record<string, MenuItem[]>);
  }, [filteredItems]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handlePreviousClick = useCallback(() => api?.scrollPrev(), [api]);
  const handleNextClick = useCallback(() => api?.scrollNext(), [api]);

  const isListView = listCategories.includes(selectedCategory);
  // Alt kategorilerin olup olmadığını kontrol et. 'Diğer' tek başınaysa başlık gösterme.
  const hasSubcategories = Object.keys(groupedItems).length > 1 || !groupedItems['Diğer'];

  const renderContent = () => {
    if (isListView) {
      return (
        <div className="max-w-3xl mx-auto bg-primary/5 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
          {Object.entries(groupedItems).map(([subcategory, items]) => (
            <Fragment key={subcategory}>
              {hasSubcategories && (
                 <h2 className="text-2xl font-bold text-center text-primary border-b-2 border-primary/20 pb-2 mb-6 mt-8 first:mt-0">
                   {subcategory}
                 </h2>
              )}
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="bg-card p-4 rounded-lg shadow-sm flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="font-bold text-card-foreground">{item.name}</p>
                      {item.description && (
                         <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
                    <p className="font-bold text-lg text-primary whitespace-nowrap pt-px">
                      {item.price.toFixed(2)} TL
                    </p>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      );
    }

    // Default Card View
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="-mt-8 relative z-10">
      <div className="container mx-auto px-4">
        {categories.length > 0 && (
          <Carousel 
            setApi={setApi} 
            opts={{ align: 'start', slidesToScroll: 'auto', containScroll: 'trimSnaps' }} 
            className="w-full mb-12"
          >
            <div className="relative">
              <CarouselContent className="-ml-2">
                {categories.map((category) => (
                  <CarouselItem key={category} className="pl-2 basis-auto">
                    <Button
                      onClick={() => handleCategoryClick(category)}
                      variant="ghost"
                      className={cn(
                        'rounded-full px-6 transition-colors duration-300 font-semibold',
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-card text-card-foreground hover:bg-card/80'
                      )}
                    >
                      {category}
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {canScrollPrev && <CarouselPrevious onClick={handlePreviousClick} className="absolute left-[-1.5rem]"/>}
              {canScrollNext && <CarouselNext onClick={handleNextClick} className="absolute right-[-1.5rem]" />}
            </div>
          </Carousel>
        )}

        {renderContent()}
      </div>
    </section>
  );
}

