import NextLink from "next/link"
import { useRouter } from "next/router"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LazisLogo } from "@/components/ui/lazis-logo"
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
  mobileItems?: NavItem[]
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Prinsip & program",
    href: "/program/programs",
    description: "Prinsip serta program jangka pendek & jangka panjang.",
  },
  {
    title: "Aktivitas",
    href: "/program/activities",
    description:
      "Santunan anak yatim, sosialisasi qurban, pengajian, sunatan massal, dan sebagainya.",
  },
  {
    title: "Rekening & QRIS",
    href: "/program/account-qris",
    description: "Rekening donasi LAZIS Baitul Karim",
  },
  {
    title: "Kontak Kami",
    href: "/program/our-contact",
    description: "Alamat, telepon, akun sosial media dan email.",
  },
]

export function MainNav({ items, mobileItems }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <NextLink href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <LazisLogo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </NextLink>
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
                              <NextLink
                                className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                {/* <Icons.logo className="h-6 w-6 text-white" /> */}
                                <LazisLogo />
                                <div className="my-4 text-lg font-medium text-white">
                                  LAZIS Baitul Karim
                                </div>
                                <p className="text-sm leading-tight text-white/90">
                                  Lembaga Amil Zakat, Infaq dan Shodaqoh.
                                </p>
                              </NextLink>
                            </NavigationMenuLink>
                          </li>
                          <ListItem
                            href="/about-us/profile"
                            id="profile"
                            title="Profil"
                          >
                            Kerjasama dengan <strong>LAZNAS</strong> Yatim
                            Mandiri.
                          </ListItem>
                          <ListItem
                            href="/about-us/vision-mission"
                            id="vission-mission"
                            title="Visi & Misi"
                          >
                            Membangun kemandirian umat, khususnya yatim dan
                            dhu’afa.
                          </ListItem>
                          <ListItem
                            href="/about-us/organization"
                            title="Struktur Organisasi"
                          >
                            Struktur serta susunan kepengurusan.
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
            <LazisLogo className="h-7 w-7" />
            <span className="ml-2 font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          <DropdownMenuLabel>
            <NextLink href="/" className="flex items-center">
              <LazisLogo className="mr-2 h-5 w-5" />
              {siteConfig.name}
            </NextLink>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {mobileItems?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <NextLink href={item.href}>{item.title}</NextLink>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ListItem = ({ href, ...props }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NavigationMenuLink
      asChild
      className="NavigationMenuLink"
      active={isActive}
      {...props}
    >
      <NextLink
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
          props.classname
        )}
        {...props}
        passHref
      >
        <div className="text-sm font-medium leading-none">{props.title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
          {props.children}
        </p>
      </NextLink>
    </NavigationMenuLink>
  )
}
ListItem.displayName = "ListItem"

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
