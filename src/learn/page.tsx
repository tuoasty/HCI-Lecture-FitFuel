import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Bookmark, ChevronRight, Clock, Search } from "lucide-react"

export default function LearnPage() {
    return (
        <div className="container py-10 p-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-teal-800">Educational Content</h1>
                <p className="text-teal-600 mt-2">Learn about nutrition, healthy eating, and wellness</p>
            </div>

            <div className="mb-8">
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search for nutrition topics..." className="pl-10" />
                    <Button className="absolute right-0 top-0 h-full rounded-l-none bg-teal-800 hover:bg-teal-700">Search</Button>
                </div>
            </div>

            <Tabs defaultValue="articles" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                    <TabsTrigger value="articles">Articles</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="articles" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="md:col-span-3 overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    <img
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Understanding Macronutrients"
                                        width={400}
                                        height={300}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-2/3 p-6">
                                    <CardHeader className="p-0 pb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Badge className="bg-teal-100 text-teal-800 mb-2">Featured</Badge>
                                                <CardTitle className="text-2xl mb-2">
                                                    Understanding Macronutrients: The Building Blocks of Nutrition
                                                </CardTitle>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <Bookmark className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <CardDescription>
                                            Learn how proteins, carbohydrates, and fats work together to fuel your body and support your
                                            health goals.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0 pb-4">
                                        <p className="text-muted-foreground">
                                            Macronutrients are the nutrients that your body needs in large amounts to function properly. This
                                            comprehensive guide breaks down the role of each macronutrient, how much you need, and the best
                                            sources to include in your diet.
                                        </p>
                                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                                            <Clock className="h-4 w-4 mr-1" />
                                            <span>10 min read</span>
                                            <span className="mx-2">•</span>
                                            <span>By Nutrition Expert</span>
                                            <span className="mx-2">•</span>
                                            <span>March 5, 2025</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-0">
                                        <Button className="bg-teal-800 hover:bg-teal-700">
                                            Read Article
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </div>
                            </div>
                        </Card>

                        {[
                            {
                                title: "The Science of Hydration: How Much Water Do You Really Need?",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "Discover the truth about hydration needs and how to optimize your water intake.",
                                readTime: "8 min",
                                date: "March 3, 2025",
                                category: "Hydration",
                            },
                            {
                                title: "Meal Timing: Does When You Eat Matter as Much as What You Eat?",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "Exploring the relationship between meal timing and metabolic health.",
                                readTime: "12 min",
                                date: "March 1, 2025",
                                category: "Metabolism",
                            },
                            {
                                title: "Plant-Based Protein Sources: A Complete Guide",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "How to meet your protein needs with plant-based foods.",
                                readTime: "9 min",
                                date: "February 28, 2025",
                                category: "Protein",
                            },
                            {
                                title: "Understanding Food Labels: What to Look For",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "Learn how to decode nutrition facts and ingredient lists.",
                                readTime: "7 min",
                                date: "February 25, 2025",
                                category: "Food Literacy",
                            },
                            {
                                title: "The Role of Fiber in Digestive Health",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "Why fiber is crucial for gut health and how to get more in your diet.",
                                readTime: "10 min",
                                date: "February 20, 2025",
                                category: "Gut Health",
                            },
                            {
                                title: "Mindful Eating: Techniques for a Healthier Relationship with Food",
                                image: "/placeholder.svg?height=200&width=300",
                                description: "Practical strategies to develop mindfulness around eating habits.",
                                readTime: "11 min",
                                date: "February 15, 2025",
                                category: "Mindfulness",
                            },
                        ].map((article, i) => (
                            <Card key={i} className="overflow-hidden">
                                <div>
                                    <img
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="bg-teal-50 mb-2">
                                            {article.category}
                                        </Badge>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Bookmark className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <h3 className="font-medium text-lg mb-2">{article.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>{article.readTime} read</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.date}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-5 pt-0">
                                    <Button variant="outline" className="w-full">
                                        Read Article
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <Button variant="outline">Load More Articles</Button>
                    </div>
                </TabsContent>

                <TabsContent value="videos" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "How to Meal Prep for the Week in Just 2 Hours",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "18:24",
                                views: "45K",
                                date: "March 2, 2025",
                            },
                            {
                                title: "The Truth About Superfoods: What's Worth It and What's Hype",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "15:10",
                                views: "32K",
                                date: "February 28, 2025",
                            },
                            {
                                title: "5 Simple Exercises You Can Do at Your Desk",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "12:45",
                                views: "28K",
                                date: "February 25, 2025",
                            },
                            {
                                title: "Understanding Glycemic Index and Blood Sugar",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "22:18",
                                views: "19K",
                                date: "February 20, 2025",
                            },
                            {
                                title: "Cooking with Herbs and Spices: Flavor Without Extra Calories",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "16:52",
                                views: "23K",
                                date: "February 15, 2025",
                            },
                            {
                                title: "How to Read Food Labels Like a Nutritionist",
                                image: "/placeholder.svg?height=200&width=300",
                                duration: "14:30",
                                views: "37K",
                                date: "February 10, 2025",
                            },
                        ].map((video, i) => (
                            <Card key={i} className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={video.image || "/placeholder.svg"}
                                        alt={video.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {video.duration}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-teal-800 ml-1" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-medium text-lg mb-2">{video.title}</h3>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <span>{video.views} views</span>
                                        <span className="mx-2">•</span>
                                        <span>{video.date}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button variant="outline" className="w-full">
                                        Watch Video
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <Button variant="outline">Load More Videos</Button>
                    </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-0">
                    <Card>
                        <CardHeader>
                            <CardTitle>Frequently Asked Questions</CardTitle>
                            <CardDescription>Find answers to common questions about nutrition and healthy eating</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How many calories should I eat per day?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">
                                            The number of calories you need depends on several factors including your age, gender, weight,
                                            height, and activity level. As a general guideline:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Adult women: 1,600-2,400 calories per day</li>
                                            <li>Adult men: 2,000-3,000 calories per day</li>
                                        </ul>
                                        <p>
                                            For a more accurate calculation, you can use the BMI Calculator in FitFuel, which takes into
                                            account your specific metrics and goals to provide personalized calorie recommendations.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What's the ideal macronutrient ratio for weight loss?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">
                                            While there's no one-size-fits-all macronutrient ratio for weight loss, a common starting point
                                            is:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Protein: 25-30% of total calories</li>
                                            <li>Carbohydrates: 40-45% of total calories</li>
                                            <li>Fat: 25-35% of total calories</li>
                                        </ul>
                                        <p>
                                            Higher protein intake can help preserve muscle mass during weight loss and increase satiety. The
                                            most important factor for weight loss is maintaining a calorie deficit (consuming fewer calories
                                            than you burn).
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How much protein do I need daily?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">
                                            Protein requirements vary based on your weight, activity level, and fitness goals:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Sedentary adults: 0.8g per kg of body weight</li>
                                            <li>Moderately active adults: 1.0-1.2g per kg of body weight</li>
                                            <li>Very active adults or those trying to build muscle: 1.2-2.0g per kg of body weight</li>
                                        </ul>
                                        <p>
                                            For example, a 70kg moderately active person would need approximately 70-84g of protein daily.
                                            FitFuel's diet recommendations calculate your specific protein needs based on your profile.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Is intermittent fasting effective for weight loss?</AccordionTrigger>
                                    <AccordionContent>
                                        <p>
                                            Intermittent fasting can be effective for weight loss primarily because it helps reduce total
                                            calorie intake by limiting the eating window. Research shows it may offer additional metabolic
                                            benefits for some people, including improved insulin sensitivity and cellular repair processes.
                                            However, it's not necessarily more effective than other calorie-restriction methods when total
                                            calorie intake is the same. The best diet approach is one that you can sustain long-term, so
                                            intermittent fasting may work well for some individuals but not others.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger>How much water should I drink daily?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">
                                            The commonly cited recommendation is to drink 8 glasses (about 2 liters) of water per day, but
                                            individual needs vary based on:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Body weight and size</li>
                                            <li>Activity level and sweat rate</li>
                                            <li>Climate and environment</li>
                                            <li>Overall health</li>
                                        </ul>
                                        <p>
                                            A good general guideline is to drink enough so that you're rarely thirsty and your urine is
                                            colorless or light yellow. For most adults, this is about 2.7 liters (women) to 3.7 liters (men)
                                            of total water from all beverages and foods daily.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Are carbohydrates bad for you?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">
                                            Carbohydrates are not inherently "bad" - they're a macronutrient that provides energy for your
                                            body, especially your brain and muscles. The quality and quantity of carbs matter more than simply
                                            avoiding them.
                                        </p>
                                        <p className="mb-2">
                                            <strong>Healthy carbohydrate sources include:</strong>
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Whole grains (oats, brown rice, quinoa)</li>
                                            <li>Fruits and vegetables</li>
                                            <li>Legumes (beans, lentils)</li>
                                            <li>Dairy products</li>
                                        </ul>
                                        <p>
                                            These provide fiber, vitamins, minerals, and sustained energy. Limiting refined carbs (white
                                            bread, sugary drinks, processed snacks) is generally beneficial for most people's health goals.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger>How can I reduce sugar cravings?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">Here are effective strategies to reduce sugar cravings:</p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>
                                                Eat regular, balanced meals with protein, healthy fats, and fiber to stabilize blood sugar
                                            </li>
                                            <li>Stay hydrated - sometimes thirst is misinterpreted as sugar cravings</li>
                                            <li>Get adequate sleep - sleep deprivation increases cravings for high-calorie, sweet foods</li>
                                            <li>Manage stress through exercise, meditation, or other relaxation techniques</li>
                                            <li>Gradually reduce added sugar in your diet to retrain your taste buds</li>
                                            <li>Use natural sweeteners like fruit when you need something sweet</li>
                                            <li>Include fermented foods like yogurt, which may help reduce sugar cravings</li>
                                        </ul>
                                        <p>
                                            Remember that it takes time to change habits - most people find sugar cravings diminish
                                            significantly after 1-2 weeks of reduced sugar intake.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger>What's the best diet for weight loss?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2">The "best" diet for weight loss is one that:</p>
                                        <ul className="list-disc pl-5 space-y-1 mb-2">
                                            <li>Creates a moderate calorie deficit (typically 500-750 calories below maintenance)</li>
                                            <li>Includes foods you enjoy and can stick with long-term</li>
                                            <li>Provides adequate protein to preserve muscle mass</li>
                                            <li>Includes plenty of fiber-rich foods for satiety</li>
                                            <li>Fits your lifestyle and food preferences</li>
                                        </ul>
                                        <p>
                                            Research shows that adherence is the most important factor for long-term success. Whether
                                            low-carb, Mediterranean, plant-based, or another approach, the diet that works best is the one you
                                            can maintain consistently. FitFuel's personalized recommendations take your preferences into
                                            account to create a sustainable plan.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <div className="text-center max-w-md">
                                <p className="text-muted-foreground mb-4">
                                    Don't see your question here? Our nutrition experts are ready to help.
                                </p>
                                <Button className="bg-teal-800 hover:bg-teal-700">
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Browse All Topics
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

