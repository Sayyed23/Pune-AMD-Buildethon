import Image from "next/image";
import Link from "next/link";
import { 
  Bell, User, Search, MapPin, Search as SearchIcon, ScanLine, 
  Settings2, Activity, Leaf, Utensils, Zap, Flame,
  Coffee, Salad, ChevronRight, Apple
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0 bg-background font-sans text-foreground">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center flex-row justify-between px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg font-heading">
              B
            </div>
            <h1 className="text-xl font-bold font-heading text-primary">Biteza</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground">
              <Bell className="h-6 w-6" />
            </button>
            <Avatar className="h-9 w-9 border-2 border-transparent hover:border-primary transition-all">
              <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="User avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 flex flex-col gap-8">
        
        {/* Personalized Greeting */}
        <section className="flex flex-col gap-1">
          <h2 className="text-2xl sm:text-3xl font-semibold font-heading">
            Good Afternoon, Alex
          </h2>
          <p className="text-muted-foreground flex items-center gap-1.5 text-sm sm:text-base">
            <MapPin className="h-4 w-4" /> 
            <span>Busy at the office • Need something quick</span>
          </p>
        </section>

        {/* Global Search */}
        <section className="relative">
          <div className="relative group">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              className="pl-11 h-14 bg-secondary border-none rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:text-gray-800 text-base" 
              placeholder="Search for healthy meals, ingredients, or places..." 
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary hover:bg-white/80">
                <ScanLine className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-500 hover:text-primary">
                <Settings2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Quick Context Action Bar */}
        <section className="grid grid-cols-3 gap-3">
          <Card className="border-none shadow-sm bg-[#e8e9e3] hover:bg-[#e2e3dd] transition-colors cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-center h-full">
              <div className="bg-white p-3 rounded-full text-[#698B69] group-hover:scale-110 transition-transform shadow-sm">
                <Salad className="h-6 w-6" />
              </div>
              <span className="font-medium text-sm text-[--color-muted-green]">Log Meal</span>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-[--color-vibrant-green] hover:brightness-95 transition-all cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-center h-full">
              <div className="bg-white/80 p-3 rounded-full text-primary group-hover:scale-110 transition-transform shadow-sm">
                <Utensils className="h-6 w-6" />
              </div>
              <span className="font-medium text-sm text-primary">Quick Order</span>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-[#ffe5df] hover:brightness-95 transition-colors cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-center h-full">
              <div className="bg-white p-3 rounded-full text-[--color-terra] group-hover:scale-110 transition-transform shadow-sm">
                <Activity className="h-6 w-6" />
              </div>
              <span className="font-medium text-sm text-[--color-terra]">View Plan</span>
            </CardContent>
          </Card>
        </section>

        {/* Smart Recommendation */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold font-heading flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              Smart Pick for You
            </h3>
            <button className="text-primary text-sm font-medium hover:underline">View all</button>
          </div>
          
          <Card className="border-none shadow-md overflow-hidden bg-white group cursor-pointer">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 sm:h-auto sm:w-1/3 bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" 
                  alt="Healthy Bowl" 
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm border-none">
                    High Protein
                  </Badge>
                  <Badge className="bg-amber-100/90 text-amber-800 hover:bg-amber-100 backdrop-blur-sm shadow-sm border-none flex items-center gap-1">
                    <Flame className="h-3 w-3" /> 420 kcal
                  </Badge>
                </div>
              </div>
              <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold font-heading text-foreground">Mediterranean Quinoa Bowl</h4>
                    <span className="font-bold text-primary text-lg">$12.50</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for your post-workout recovery. Rich in fiber and lean protein. Prepared locally by GreenLeaf Cafe.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> 
                    <span>0.8 miles away • 15 min</span>
                  </div>
                  <button className="text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full font-medium transition-colors text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Categories / Smart Swaps */}
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold font-heading">Craving something else?</h3>
          <Tabs defaultValue="nearby" className="w-full">
            <TabsList className="bg-secondary p-1 h-auto rounded-full w-full justify-start overflow-x-auto no-scrollbar">
              <TabsTrigger value="nearby" className="rounded-full px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm">Nearby Healthy</TabsTrigger>
              <TabsTrigger value="swaps" className="rounded-full px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm">Smart Swaps</TabsTrigger>
              <TabsTrigger value="snacks" className="rounded-full px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm">Guilt-free Snacks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nearby" className="mt-4 focus-visible:outline-none">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Avocado Toast", place: "Morning Brew", cal: 320, img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80" },
                  { name: "Grilled Chicken Wrap", place: "WrapIt", cal: 450, img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
                  { name: "Berry Smoothie", place: "Juice Bar", cal: 210, img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80" },
                  { name: "Salmon Salad", place: "Fresh Catch", cal: 380, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" }
                ].map((item, i) => (
                  <Card key={i} className="border-none shadow-sm overflow-hidden bg-white cursor-pointer hover:shadow-md transition-all">
                    <div className="h-32 relative bg-gray-100">
                      <Image src={item.img} alt={item.name} layout="fill" objectFit="cover" />
                    </div>
                    <CardContent className="p-3">
                      <h5 className="font-bold text-sm truncate">{item.name}</h5>
                      <span className="text-xs text-muted-foreground block truncate">{item.place}</span>
                      <div className="flex items-center gap-1 text-xs font-medium text-amber-600 mt-2">
                        <Flame className="h-3 w-3" /> {item.cal} kcal
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Daily Progress Widget */}
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold font-heading">Today's Progress</h3>
          <Card className="border-none shadow-sm bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[--color-vibrant-green] rounded-bl-full opacity-20 -mr-10 -mt-10" />
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Calories Remaining</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-heading text-foreground">1,240</span>
                    <span className="text-sm text-muted-foreground font-medium">/ 2,400 kcal</span>
                  </div>
                </div>
                <div className="bg-[#fff3eb] text-[--color-terra] px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                  <Flame className="h-4 w-4" />
                  <span>3 Day Streak!</span>
                </div>
              </div>
              
              <Progress value={45} className="h-3 bg-secondary mb-6" />
              
              <div className="grid grid-cols-3 gap-4 border-t border-border/50 pt-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> Protein
                  </div>
                  <div className="font-bold text-sm">45g <span className="text-muted-foreground font-normal">/ 120g</span></div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div> Carbs
                  </div>
                  <div className="font-bold text-sm">120g <span className="text-muted-foreground font-normal">/ 250g</span></div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <div className="w-2 h-2 rounded-full bg-[--color-vibrant-green]"></div> Fat
                  </div>
                  <div className="font-bold text-sm">32g <span className="text-muted-foreground font-normal">/ 70g</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Floating AI Coach Button */}
      <Link 
        href="/coach"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-foreground text-background shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full p-4 flex items-center justify-center group z-50 ring-4 ring-background"
      >
        <SparklesIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Open AI Coach</span>
      </Link>
    </div>
  );
}

// Simple fallback icon since Sparkles might not be imported above
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
