import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChevronRight, Download, Filter, Printer, Share2 } from "lucide-react"

export default function DietPage() {
    return (
        <div className="container py-10 p-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-teal-800">Diet Recommendations</h1>
                <p className="text-teal-600 mt-2">Personalized meal plans based on your BMI, activity level, and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Diet Profile</CardTitle>
                            <CardDescription>Based on your profile information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">BMI</span>
                                    <span className="font-medium">22.9 (Normal)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Daily Calories</span>
                                    <span className="font-medium">2,100 kcal</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Protein</span>
                                    <span className="font-medium">105g (20%)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Carbs</span>
                                    <span className="font-medium">263g (50%)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Fat</span>
                                    <span className="font-medium">70g (30%)</span>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h3 className="font-medium">Diet Preferences</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="bg-teal-50">
                                        Standard
                                    </Badge>
                                    <Badge variant="outline" className="bg-teal-50">
                                        No Dairy
                                    </Badge>
                                    <Badge variant="outline" className="bg-teal-50">
                                        Low Sugar
                                    </Badge>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h3 className="font-medium">Adjust Your Plan</h3>
                                <div className="space-y-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="diet-type">Diet Type</Label>
                                        <Select defaultValue="balanced">
                                            <SelectTrigger id="diet-type">
                                                <SelectValue placeholder="Select diet type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="balanced">Balanced</SelectItem>
                                                <SelectItem value="low-carb">Low Carb</SelectItem>
                                                <SelectItem value="high-protein">High Protein</SelectItem>
                                                <SelectItem value="keto">Keto</SelectItem>
                                                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="meals-per-day">Meals Per Day</Label>
                                        <Select defaultValue="3">
                                            <SelectTrigger id="meals-per-day">
                                                <SelectValue placeholder="Select meals per day" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="2">2 meals</SelectItem>
                                                <SelectItem value="3">3 meals</SelectItem>
                                                <SelectItem value="4">4 meals</SelectItem>
                                                <SelectItem value="5">5 meals</SelectItem>
                                                <SelectItem value="6">6 meals</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="calorie-adjustment">Calorie Adjustment</Label>
                                        <Select defaultValue="0">
                                            <SelectTrigger id="calorie-adjustment">
                                                <SelectValue placeholder="Select calorie adjustment" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="-500">Reduce by 500 kcal</SelectItem>
                                                <SelectItem value="-250">Reduce by 250 kcal</SelectItem>
                                                <SelectItem value="0">No adjustment</SelectItem>
                                                <SelectItem value="250">Increase by 250 kcal</SelectItem>
                                                <SelectItem value="500">Increase by 500 kcal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <Button className="w-full bg-teal-800 hover:bg-teal-700">Generate New Plan</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Your Personalized Meal Plan</CardTitle>
                                <CardDescription>Based on your BMI and preferences</CardDescription>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                    <Printer className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Share2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="day1" className="w-full">
                                <div className="flex justify-between items-center mb-6">
                                    <TabsList>
                                        <TabsTrigger value="day1">Day 1</TabsTrigger>
                                        <TabsTrigger value="day2">Day 2</TabsTrigger>
                                        <TabsTrigger value="day3">Day 3</TabsTrigger>
                                        <TabsTrigger value="day4">Day 4</TabsTrigger>
                                        <TabsTrigger value="day5">Day 5</TabsTrigger>
                                        <TabsTrigger value="day6">Day 6</TabsTrigger>
                                        <TabsTrigger value="day7">Day 7</TabsTrigger>
                                    </TabsList>

                                    <Button variant="outline" size="sm">
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filter
                                    </Button>
                                </div>

                                <TabsContent value="day1" className="space-y-6">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Breakfast</CardTitle>
                                            <CardDescription>450 calories</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="md:w-1/4">
                                                    <img
                                                        src="/placeholder.svg?height=150&width=150"
                                                        alt="Greek Yogurt Parfait"
                                                        width={150}
                                                        height={150}
                                                        className="rounded-lg object-cover w-full h-auto"
                                                    />
                                                </div>
                                                <div className="md:w-3/4">
                                                    <h3 className="font-medium text-lg mb-2">Greek Yogurt Parfait with Berries and Granola</h3>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            High Protein
                                                        </Badge>
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            Antioxidants
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        A protein-rich breakfast with creamy Greek yogurt, fresh berries, and crunchy granola to
                                                        keep you energized throughout the morning.
                                                    </p>
                                                    <div className="grid grid-cols-4 gap-2 text-sm">
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Protein</p>
                                                            <p>24g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Carbs</p>
                                                            <p>45g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fat</p>
                                                            <p>15g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fiber</p>
                                                            <p>6g</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-end">
                                            <Button variant="outline" size="sm">
                                                View Recipe
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Lunch</CardTitle>
                                            <CardDescription>650 calories</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="md:w-1/4">
                                                    <img
                                                        src="/placeholder.svg?height=150&width=150"
                                                        alt="Grilled Chicken Salad"
                                                        width={150}
                                                        height={150}
                                                        className="rounded-lg object-cover w-full h-auto"
                                                    />
                                                </div>
                                                <div className="md:w-3/4">
                                                    <h3 className="font-medium text-lg mb-2">Grilled Chicken Salad with Avocado</h3>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            High Protein
                                                        </Badge>
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            Healthy Fats
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        A satisfying salad with lean grilled chicken, creamy avocado, mixed greens, and a light
                                                        vinaigrette dressing.
                                                    </p>
                                                    <div className="grid grid-cols-4 gap-2 text-sm">
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Protein</p>
                                                            <p>35g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Carbs</p>
                                                            <p>25g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fat</p>
                                                            <p>28g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fiber</p>
                                                            <p>8g</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-end">
                                            <Button variant="outline" size="sm">
                                                View Recipe
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Dinner</CardTitle>
                                            <CardDescription>700 calories</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="md:w-1/4">
                                                    <img
                                                        src="/placeholder.svg?height=150&width=150"
                                                        alt="Baked Salmon"
                                                        width={150}
                                                        height={150}
                                                        className="rounded-lg object-cover w-full h-auto"
                                                    />
                                                </div>
                                                <div className="md:w-3/4">
                                                    <h3 className="font-medium text-lg mb-2">Baked Salmon with Quinoa and Roasted Vegetables</h3>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            Omega-3
                                                        </Badge>
                                                        <Badge variant="outline" className="bg-teal-50">
                                                            Complete Protein
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        Omega-3 rich salmon with fluffy quinoa and a colorful mix of roasted vegetables for a
                                                        nutrient-dense dinner.
                                                    </p>
                                                    <div className="grid grid-cols-4 gap-2 text-sm">
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Protein</p>
                                                            <p>38g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Carbs</p>
                                                            <p>55g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fat</p>
                                                            <p>30g</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-teal-50 rounded">
                                                            <p className="font-medium">Fiber</p>
                                                            <p>9g</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-end">
                                            <Button variant="outline" size="sm">
                                                View Recipe
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Snacks</CardTitle>
                                            <CardDescription>300 calories</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                        <img
                                                            src="/placeholder.svg?height=64&width=64"
                                                            alt="Apple with Almond Butter"
                                                            width={64}
                                                            height={64}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium">Apple with Almond Butter</h4>
                                                        <p className="text-xs text-muted-foreground">150 calories</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                        <img
                                                            src="/placeholder.svg?height=64&width=64"
                                                            alt="Greek Yogurt with Honey"
                                                            width={64}
                                                            height={64}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium">Greek Yogurt with Honey</h4>
                                                        <p className="text-xs text-muted-foreground">150 calories</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Daily Summary</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-sm font-medium mb-2">Macronutrient Distribution</h3>
                                                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                                        <div className="flex h-full">
                                                            <div className="h-full bg-teal-500 w-[20%]"></div>
                                                            <div className="h-full bg-blue-500 w-[50%]"></div>
                                                            <div className="h-full bg-amber-500 w-[30%]"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between text-xs mt-1">
                            <span className="flex items-center">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-1"></div>
                              Protein (20%)
                            </span>
                                                        <span className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                              Carbs (50%)
                            </span>
                                                        <span className="flex items-center">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-1"></div>
                              Fat (30%)
                            </span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    <Card>
                                                        <CardContent className="p-4 text-center">
                                                            <p className="text-sm text-muted-foreground">Total Calories</p>
                                                            <p className="text-2xl font-bold text-teal-800">2,100</p>
                                                        </CardContent>
                                                    </Card>
                                                    <Card>
                                                        <CardContent className="p-4 text-center">
                                                            <p className="text-sm text-muted-foreground">Protein</p>
                                                            <p className="text-2xl font-bold text-teal-800">105g</p>
                                                        </CardContent>
                                                    </Card>
                                                    <Card>
                                                        <CardContent className="p-4 text-center">
                                                            <p className="text-sm text-muted-foreground">Carbs</p>
                                                            <p className="text-2xl font-bold text-teal-800">263g</p>
                                                        </CardContent>
                                                    </Card>
                                                    <Card>
                                                        <CardContent className="p-4 text-center">
                                                            <p className="text-sm text-muted-foreground">Fat</p>
                                                            <p className="text-2xl font-bold text-teal-800">70g</p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-center">
                                            <Button className="bg-teal-800 hover:bg-teal-700">Save This Meal Plan</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                {["day2", "day3", "day4", "day5", "day6", "day7"].map((day) => (
                                    <TabsContent key={day} value={day} className="text-center py-12">
                                        <h3 className="text-lg font-medium text-teal-800 mb-2">Coming Soon</h3>
                                        <p className="text-muted-foreground">
                                            Your meal plan for {day.replace("day", "Day ")} will be available here.
                                        </p>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

