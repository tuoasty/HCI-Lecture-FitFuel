import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Clock, Filter, Heart, Search, Star, Utensils } from "lucide-react"

export default function RecipesPage() {
    return (
        <div className="container py-10 p-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-teal-800">Recipes Database</h1>
                <p className="text-teal-600 mt-2">Discover healthy and delicious recipes tailored to your preferences</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                <div className="lg:w-1/4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Filter className="h-5 w-5 mr-2" />
                                Filters
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">

                            <div className="space-y-2">
                                <Label htmlFor="search">Search Recipes</Label>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input id="search" placeholder="Search by name or ingredient..." className="pl-8" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium">Meal Type</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {["Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Appetizer"].map((meal) => (
                                        <div key={meal} className="flex items-center space-x-2">
                                            <Checkbox id={`meal-${meal.toLowerCase()}`} />
                                            <Label htmlFor={`meal-${meal.toLowerCase()}`}>{meal}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium">Diet Type</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        "Vegetarian",
                                        "Vegan",
                                        "Keto",
                                        "Paleo",
                                        "Low-Carb",
                                        "Gluten-Free",
                                        "Dairy-Free",
                                        "High-Protein",
                                    ].map((diet) => (
                                        <div key={diet} className="flex items-center space-x-2">
                                            <Checkbox id={`diet-${diet.toLowerCase()}`} />
                                            <Label htmlFor={`diet-${diet.toLowerCase()}`}>{diet}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium">Calories</h3>
                                    <span className="text-sm text-muted-foreground">Max 800 kcal</span>
                                </div>
                                <Slider defaultValue={[800]} max={1500} step={50} />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>0 kcal</span>
                                    <span>1500 kcal</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium">Cooking Time</h3>
                                    <span className="text-sm text-muted-foreground">Max 60 min</span>
                                </div>
                                <Slider defaultValue={[60]} max={120} step={5} />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>0 min</span>
                                    <span>120 min</span>
                                </div>
                            </div>

                            <Button className="w-full bg-teal-800 hover:bg-teal-700">Apply Filters</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:w-3/4">
                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex justify-between items-center mb-6">
                            <TabsList>
                                <TabsTrigger value="all">All Recipes</TabsTrigger>
                                <TabsTrigger value="popular">Popular</TabsTrigger>
                                <TabsTrigger value="recent">Recent</TabsTrigger>
                                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                            </TabsList>

                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Utensils className="h-4 w-4 mr-2" />
                                    My Recipes
                                </Button>
                            </div>
                        </div>

                        <TabsContent value="all" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Greek Yogurt Parfait",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "10 min",
                                        calories: "350 kcal",
                                        rating: 4.8,
                                        tags: ["Breakfast", "High Protein"],
                                    },
                                    {
                                        title: "Grilled Chicken Salad",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "25 min",
                                        calories: "420 kcal",
                                        rating: 4.6,
                                        tags: ["Lunch", "High Protein"],
                                    },
                                    {
                                        title: "Baked Salmon with Quinoa",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "35 min",
                                        calories: "520 kcal",
                                        rating: 4.9,
                                        tags: ["Dinner", "Omega-3"],
                                    },
                                    {
                                        title: "Avocado Toast with Egg",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "15 min",
                                        calories: "380 kcal",
                                        rating: 4.7,
                                        tags: ["Breakfast", "Healthy Fats"],
                                    },
                                    {
                                        title: "Vegetable Stir Fry",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "20 min",
                                        calories: "310 kcal",
                                        rating: 4.5,
                                        tags: ["Dinner", "Vegetarian"],
                                    },
                                    {
                                        title: "Berry Protein Smoothie",
                                        image: "/placeholder.svg?height=200&width=300",
                                        time: "5 min",
                                        calories: "280 kcal",
                                        rating: 4.4,
                                        tags: ["Snack", "High Protein"],
                                    },
                                ].map((recipe, i) => (
                                    <Card key={i} className="overflow-hidden">
                                        <div className="relative">
                                            <img
                                                src={recipe.image || "/placeholder.svg"}
                                                alt={recipe.title}
                                                width={300}
                                                height={200}
                                                className="w-full h-48 object-cover"
                                            />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white/90"
                                            >
                                                <Heart className="h-5 w-5 text-rose-500" />
                                            </Button>
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-medium text-lg">{recipe.title}</h3>
                                                <div className="flex items-center">
                                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                                                    <span className="text-sm">{recipe.rating}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {recipe.tags.map((tag, j) => (
                                                    <Badge key={j} variant="outline" className="bg-teal-50">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {recipe.time}
                                                </div>
                                                <div>{recipe.calories}</div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-4 pt-0">
                                            <Button className="w-full bg-teal-800 hover:bg-teal-700">View Recipe</Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            <div className="flex justify-center mt-8">
                                <Button variant="outline">Load More Recipes</Button>
                            </div>
                        </TabsContent>

                        {["popular", "recent", "favorites"].map((tab) => (
                            <TabsContent key={tab} value={tab} className="mt-0">
                                <div className="text-center py-12">
                                    <h3 className="text-lg font-medium text-teal-800 mb-2">Coming Soon</h3>
                                    <p className="text-muted-foreground">Your {tab} recipes will be displayed here.</p>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

