import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Bell, Calendar, History, Save, Settings, User } from "lucide-react"

export default function ProfilePage() {
    return (
        <div className="container py-10 p-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center space-y-4 mb-6">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                                    <AvatarFallback className="bg-teal-100 text-teal-800 text-xl">JD</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h2 className="text-xl font-bold">Octavius Sandriago</h2>
                                    <p className="text-sm text-muted-foreground">octavius.sandriago@binus.ac.id</p>
                                </div>
                                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Premium Member</Badge>
                            </div>

                            <nav className="space-y-1">
                                <Button variant="ghost" className="w-full justify-start" asChild>
                                    <a href="#personal-info">
                                        <User className="mr-2 h-4 w-4" />
                                        Personal Information
                                    </a>
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" asChild>
                                    <a href="#health-metrics">
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        Health Metrics
                                    </a>
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" asChild>
                                    <a href="#diet-preferences">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Diet Preferences
                                    </a>
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" asChild>
                                    <a href="#history">
                                        <History className="mr-2 h-4 w-4" />
                                        History
                                    </a>
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" asChild>
                                    <a href="#notifications">
                                        <Bell className="mr-2 h-4 w-4" />
                                        Notifications
                                    </a>
                                </Button>
                            </nav>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-3/4">
                    <Tabs defaultValue="personal-info" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
                            <TabsTrigger value="health-metrics">Health Metrics</TabsTrigger>
                            <TabsTrigger value="diet-preferences">Diet Preferences</TabsTrigger>
                            <TabsTrigger value="history">History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="personal-info">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Personal Information</CardTitle>
                                    <CardDescription>Update your personal details and account information</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First Name</Label>
                                            <Input id="first-name" defaultValue="Octavius" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last Name</Label>
                                            <Input id="last-name" defaultValue="Sandriago" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue="octavius.sandriago@binus.ac.id" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" type="tel" defaultValue="+123 456 789" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dob">Date of Birth</Label>
                                            <Input id="dob" type="date" defaultValue="2006-02-18" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">Gender</Label>
                                            <Select defaultValue="male">
                                                <SelectTrigger id="gender">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button className="bg-teal-800 hover:bg-teal-700">
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Changes
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="health-metrics">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Health Metrics</CardTitle>
                                    <CardDescription>Update your health measurements to get accurate recommendations</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="weight">Weight (kg)</Label>
                                            <Input id="weight" type="number" defaultValue="70" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="height">Height (cm)</Label>
                                            <Input id="height" type="number" defaultValue="175" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="activity-level">Activity Level</Label>
                                            <Select defaultValue="moderate">
                                                <SelectTrigger id="activity-level">
                                                    <SelectValue placeholder="Select activity level" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                                                    <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                                                    <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                                                    <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                                                    <SelectItem value="very-active">Very Active (very hard exercise & physical job)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="goal">Fitness Goal</Label>
                                            <Select defaultValue="lose-weight">
                                                <SelectTrigger id="goal">
                                                    <SelectValue placeholder="Select your goal" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="lose-weight">Lose Weight</SelectItem>
                                                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                                                    <SelectItem value="gain-weight">Gain Weight</SelectItem>
                                                    <SelectItem value="build-muscle">Build Muscle</SelectItem>
                                                    <SelectItem value="improve-health">Improve Overall Health</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <h3 className="text-lg font-medium mb-4">Current Metrics</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <p className="text-sm text-muted-foreground">BMI</p>
                                                    <p className="text-2xl font-bold text-teal-800">22.9</p>
                                                    <p className="text-xs text-teal-600">Normal</p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <p className="text-sm text-muted-foreground">Daily Calories</p>
                                                    <p className="text-2xl font-bold text-teal-800">2,100</p>
                                                    <p className="text-xs text-teal-600">Recommended</p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <p className="text-sm text-muted-foreground">Protein</p>
                                                    <p className="text-2xl font-bold text-teal-800">105g</p>
                                                    <p className="text-xs text-teal-600">Daily Target</p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <p className="text-sm text-muted-foreground">Water</p>
                                                    <p className="text-2xl font-bold text-teal-800">2.5L</p>
                                                    <p className="text-xs text-teal-600">Daily Target</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button className="bg-teal-800 hover:bg-teal-700">
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Changes
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        {/* Diet Preferences Tab */}
                        <TabsContent value="diet-preferences">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Diet Preferences</CardTitle>
                                    <CardDescription>Customize your dietary preferences and restrictions</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Diet Type</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {["Standard", "Vegetarian", "Vegan", "Pescatarian", "Keto", "Paleo"].map((diet) => (
                                                <div key={diet} className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        id={`diet-${diet.toLowerCase()}`}
                                                        name="diet-type"
                                                        className="h-4 w-4 text-teal-800 focus:ring-teal-600"
                                                        defaultChecked={diet === "Standard"}
                                                    />
                                                    <Label htmlFor={`diet-${diet.toLowerCase()}`}>{diet}</Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="text-lg font-medium">Allergies & Restrictions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {["Gluten", "Dairy", "Nuts", "Eggs", "Soy", "Shellfish", "Fish", "Pork", "Red Meat"].map(
                                                (allergy) => (
                                                    <div key={allergy} className="flex items-center space-x-2">
                                                        <input
                                                            type="checkbox"
                                                            id={`allergy-${allergy.toLowerCase()}`}
                                                            className="h-4 w-4 text-teal-800 focus:ring-teal-600"
                                                        />
                                                        <Label htmlFor={`allergy-${allergy.toLowerCase()}`}>{allergy}</Label>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="text-lg font-medium">Meal Preferences</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="meals-per-day">Meals Per Day</Label>
                                                <Select defaultValue="3">
                                                    <SelectTrigger id="meals-per-day">
                                                        <SelectValue placeholder="Select number of meals" />
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
                                                <Label htmlFor="snacks-per-day">Snacks Per Day</Label>
                                                <Select defaultValue="2">
                                                    <SelectTrigger id="snacks-per-day">
                                                        <SelectValue placeholder="Select number of snacks" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0">0 snacks</SelectItem>
                                                        <SelectItem value="1">1 snack</SelectItem>
                                                        <SelectItem value="2">2 snacks</SelectItem>
                                                        <SelectItem value="3">3 snacks</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2 pt-2">
                                            <Switch id="meal-prep" />
                                            <Label htmlFor="meal-prep">I prefer meal prep (batch cooking)</Label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Switch id="quick-meals" defaultChecked />
                                            <Label htmlFor="quick-meals">I prefer quick meals (under 30 minutes)</Label>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button className="bg-teal-800 hover:bg-teal-700">
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Preferences
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="history">
                            <Card>
                                <CardHeader>
                                    <CardTitle>History & Progress</CardTitle>
                                    <CardDescription>View your diet history and track your progress over time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Weight History</h3>
                                            <div className="h-64 w-full bg-teal-50 rounded-lg flex items-center justify-center">
                                                <p className="text-teal-800">Weight progress chart will appear here</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Recent Meal Plans</h3>
                                            <div className="space-y-4">
                                                {[
                                                    { date: "March 5, 2025", name: "Low Carb Plan" },
                                                    { date: "February 20, 2025", name: "High Protein Plan" },
                                                    { date: "February 1, 2025", name: "Balanced Diet Plan" },
                                                ].map((plan, i) => (
                                                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                                                        <div>
                                                            <p className="font-medium">{plan.name}</p>
                                                            <p className="text-sm text-muted-foreground">{plan.date}</p>
                                                        </div>
                                                        <Button variant="outline" size="sm">
                                                            <Calendar className="mr-2 h-4 w-4" />
                                                            View Plan
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Achievements</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[
                                                    { name: "First Week", description: "Completed first week of meal planning" },
                                                    { name: "Consistent", description: "Logged meals for 30 consecutive days" },
                                                    { name: "Goal Setter", description: "Set and achieved a weight goal" },
                                                    { name: "Recipe Master", description: "Tried 20 different recipes" },
                                                ].map((achievement, i) => (
                                                    <Card key={i}>
                                                        <CardContent className="p-4 text-center">
                                                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                <svg className="h-6 w-6 text-teal-800" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <p className="font-medium text-sm">{achievement.name}</p>
                                                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

