import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function BMIPage() {
    return (
        <div className="container py-10 p-12">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-teal-800">BMI Calculator</h1>
                    <p className="text-teal-600 mt-2">Calculate your Body Mass Index and get personalized health insights</p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Calculate Your BMI</CardTitle>
                        <CardDescription>Enter your height and weight to calculate your Body Mass Index</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="metric" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="metric">Metric (cm, kg)</TabsTrigger>
                                <TabsTrigger value="imperial">Imperial (ft, lbs)</TabsTrigger>
                            </TabsList>

                            <TabsContent value="metric" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="height-cm">Height (cm)</Label>
                                        <Input id="height-cm" type="number" placeholder="e.g. 175" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="weight-kg">Weight (kg)</Label>
                                        <Input id="weight-kg" type="number" placeholder="e.g. 70" />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="imperial" className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="height-ft">Height (ft)</Label>
                                        <Input id="height-ft" type="number" placeholder="e.g. 5" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="height-in">Height (in)</Label>
                                        <Input id="height-in" type="number" placeholder="e.g. 10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="weight-lbs">Weight (lbs)</Label>
                                    <Input id="weight-lbs" type="number" placeholder="e.g. 154" />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button className="bg-teal-800 hover:bg-teal-700">Calculate BMI</Button>
                    </CardFooter>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Your BMI Result</CardTitle>
                        <CardDescription>Based on the information you provided</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="w-48 h-48 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <p className="text-5xl font-bold text-teal-800">22.9</p>
                                    <p className="text-teal-600 font-medium">Normal</p>
                                </div>
                            </div>

                            <div className="w-full max-w-md">
                                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="flex h-full">
                                        <div className="h-full bg-blue-500 w-1/4"></div>
                                        <div className="h-full bg-green-500 w-1/4"></div>
                                        <div className="h-full bg-yellow-500 w-1/4"></div>
                                        <div className="h-full bg-red-500 w-1/4"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs mt-1 text-gray-600">
                                    <span>Underweight</span>
                                    <span>Normal</span>
                                    <span>Overweight</span>
                                    <span>Obese</span>
                                </div>

                                <div className="mt-6">
                                    <Alert className="bg-teal-50 border-teal-200">
                                        <InfoIcon className="h-4 w-4 text-teal-800" />
                                        <AlertTitle className="text-teal-800">Normal Weight Range</AlertTitle>
                                        <AlertDescription className="text-teal-700">
                                            For your height, a normal weight range would be from 58.5 to 79.0 kilograms.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Understanding BMI Categories</CardTitle>
                        <CardDescription>Learn what your BMI result means for your health</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-teal-800">BMI Categories:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                                            <span>
                        <strong>Below 18.5:</strong> Underweight
                      </span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                                            <span>
                        <strong>18.5 - 24.9:</strong> Normal weight
                      </span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                                            <span>
                        <strong>25.0 - 29.9:</strong> Overweight
                      </span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                                            <span>
                        <strong>30.0 and above:</strong> Obese
                      </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-teal-800">Important Notes:</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>BMI is a screening tool, not a diagnostic tool.</li>
                                        <li>BMI doesn't directly measure body fat or account for muscle mass.</li>
                                        <li>Athletes may have a high BMI due to increased muscle mass.</li>
                                        <li>BMI may not be accurate for elderly individuals who have lost muscle mass.</li>
                                        <li>Consult with a healthcare provider for a complete health assessment.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="font-semibold text-teal-800 mb-4">Health Risks by BMI Category</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium">Underweight (BMI below 18.5)</h4>
                                        <p className="text-sm">
                                            Risks include nutritional deficiencies, weakened immune system, and potential fertility issues.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Normal Weight (BMI 18.5 - 24.9)</h4>
                                        <p className="text-sm">
                                            Generally associated with the lowest health risks. Maintain a balanced diet and regular physical
                                            activity.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Overweight (BMI 25.0 - 29.9)</h4>
                                        <p className="text-sm">
                                            Increased risk of heart disease, high blood pressure, type 2 diabetes, and certain cancers.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Obese (BMI 30.0 and above)</h4>
                                        <p className="text-sm">
                                            Higher risk of serious health conditions including heart disease, stroke, type 2 diabetes, sleep
                                            apnea, and certain cancers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button className="bg-teal-800 hover:bg-teal-700">Get Diet Recommendations</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

