import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Program-program",
    href: "/docs/primitives/alert-dialog",
    description: "Berbagai program jangka pendek & jangka panjang.",
  },
  {
    title: "Kegiatan-kegiatan",
    href: "/docs/primitives/hover-card",
    description:
      "Santunan anak yatim, sosialisasi qurban, pengajian, sunatan massal, dan sebagainya.",
  },
  {
    title: "Rekening & Qris",
    href: "/docs/primitives/tabs",
    description: "Rekening donasi LAZIS Baitul Karim",
  },
  {
    title: "Kontak",
    href: "/docs/primitives/tooltip",
    description: "Alamat, telepon, akun sosial media dan email.",
  },
]

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <Image
          src="/favicon.ico"
          alt="Lazis Baitul Karim"
          width={40}
          height={40}
          className="rounded-full shadow"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <NavigationMenu key={index}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Tentang Kami
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <Icons.logo className="h-6 w-6 text-white" />
                                <div className="mt-4 mb-2 text-lg font-medium text-white">
                                  shadcn/ui
                                </div>
                                <p className="text-sm leading-tight text-white/90">
                                  Beautifully designed components built with
                                  Radix UI and Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/docs" title="Profil">
                            Kerjasama dengan <strong>LAZNAS</strong> Yatim
                            Mandiri.
                          </ListItem>
                          <ListItem
                            href="/docs/installation"
                            title="Visi & Misi"
                          >
                            Membangun kemandirian umat, khususnya yatim dan
                            dhu’afa.
                          </ListItem>
                          <ListItem
                            href="/docs/primitives/typography"
                            title="Struktur Organisasi"
                          >
                            Prinsip-prinsip serta susunan kepengurusan.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Program</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                    {/* <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Documentation
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem> */}
                  </NavigationMenuList>
                </NavigationMenu>
              )
          )}
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.logo className="mr-2 h-4 w-4" />{" "}
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
