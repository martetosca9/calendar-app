import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingRoute() {
    return(
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to Calendar<span className="text-primary">App</span></CardTitle>
                    <CardDescription>
                        Set up your account.
                    </CardDescription>
                </CardHeader>
                <form>
                <CardContent className="grid gap-y-5">
                    <div className="grid gap-y-2">
                        <Label> Full Name</Label>
                        <Input placeholder="your name" />
                    </div>
                    <div className="grid ga-y-2">
                        <Label>Username</Label>
                        <div className="flex rounded-md">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground ">CalendarApp.com/</span>
                            <Input className="rounded-l-none" placeholder="yourUsername" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Submit</Button>
                </CardFooter>
                </form>
            </Card>
        </div>
    )
}