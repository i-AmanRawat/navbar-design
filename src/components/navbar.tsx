"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, Search, Headset, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { siteConfig } from "@/config";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "24/7 Towing Service",
    // href: "/hotel-rudreshwar",
    // description:
    //   "Discover a world of luxury and sophistication at Hotel Rudreshwar.",
  },
  {
    title: "Roadside Assistance",
    // href: "/homestay-rishikesh",
    // description:
    //   "We invite you to experience the warmth of a home and the convenience of modern amenities in the spiritual heart of Rishikesh.",
  },
  {
    title: "Lockouts",
    // href: "/shrivan-river-resort",
    // description:
    //   "If you are an adventure traveler & love the view of hills, river, jungle & camping, we have the perfect place for you, Shrivan River Resort”in the jungle of yog nagri - Rishikesh. Step into our idyllic abode, where each house reveals awe-inspiring views of the valley below, allowing you to fully immerse yourself in the natural beauty that surrounds you.",
  },

  {
    title: "Junk Car Removal",
    // href: "/wellness-resort",
    // description:
    //   "Enjoy the beauty of the lush greenery, the open and fresh air from the hills and maa gangaji river, full of the peaceful serenity of nature. The resort is the ideal place to unwind and relax in peace and tranquility. The resort, situated at the bank of Maa Ganga and adjoining Rajaji National Park, is embraced by Mother Nature.",
  },
  {
    title: "24/7 Impound Service", 
    // href: "/homestay-champawat",
    // description:
    //   "Explore the unexplored beauty of Champawat, a destination that unveils nature's wonders. Visit the ancient Baleshwar Temple, find serenity by having the himalayan darshan, and witness breathtaking views from Abbott Mount. For adventure seekers, trek through lush forests and raft down pristine rivers. Champawat invites you to experience the unseen, where every moment is a discovery.",
  },
  {
    title: "Accident Towing", 
    // href: "/homestay-champawat",
    // description:
    //   "Explore the unexplored beauty of Champawat, a destination that unveils nature's wonders. Visit the ancient Baleshwar Temple, find serenity by having the himalayan darshan, and witness breathtaking views from Abbott Mount. For adventure seekers, trek through lush forests and raft down pristine rivers. Champawat invites you to experience the unseen, where every moment is a discovery.",
  },
];

export default function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [openSheet, setOpenSheet] = React.useState(false);
  return (
    <>
      <nav
        className={cn(
          "items-center space-x-4 lg:flex lg:space-x-16 space-between ",
          className,
        )}
        {...props}
      >
        <section className="flex space-x-4">
          <div className="">
            {/* <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger asChild className="">
                <Button variant="ghost">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger> */}
              {/* <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <img
                        src="/logo.svg"
                        // alt={`${siteConfig.name} Logo`}
                        alt="Logo"
                        className="h-12 w-auto"
                        // title={`${siteConfig.name} Logo`}
                        title="logo"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-3 pt-6">
                  <Link
                    href=""
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-full justify-start text-left",
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-full justify-start text-left",
                    )}
                  >
                    About Us
                  </Link>

                  <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                    <DropdownMenuTrigger>
                      <div
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "w-full items-center justify-between text-left ",
                        )}
                      >
                        Packages
                        <ChevronDownIcon className="h-5 w-5" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {components.map((component) => (
                        <DropdownMenuItem
                          key={component.title}
                          onClick={() => {
                            setOpenDropdown(false);
                            setOpenSheet(false);
                          }}
                        >
                          <Link href={component.href} className="w-full text-wrap">
                            {component.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="/helicopter-pacakage"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-full justify-start text-left",
                    )}
                  >
                    Helicopter Pacakage
                  </Link>

                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-full justify-start text-left",
                    )}
                  >
                    Contact us
                  </Link>
                </div>
              </SheetContent> */}
            {/* </Sheet> */}
        </div>
        <div className>
          <Link href="/">
            <img
            src="/logo.png"
            className="h-12 w-auto"
            />
          </Link>
        </div>
      </section>

      <NavigationMenu >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2 ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blog" className={navigationMenuTriggerStyle()}>
                BLOG
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <section className="">
        <Button variant="ghost">
          <Search className="h-5 w-5" />
        </Button>

        <Button variant="ghost">
          <Headset className="h-5 w-5" />
            <span className="pl-1">GET IN TOUCH </span>
        </Button>

        <Button variant="ghost">
          <Globe className="h-5 w-5" />
            <span className="pl-1">english</span>
        </Button>
      </section>
      </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";