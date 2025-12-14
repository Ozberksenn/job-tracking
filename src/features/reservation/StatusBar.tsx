import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const StatusBar = () => {
    return (
        <Card className="flex items-center w-[20vw]">
            <Tabs  defaultValue="Scheduled" className="flex justify-center items-center w-full pl-3 pr-3">
                <TabsList className="w-full">
                    <TabsTrigger value="Scheduled">Scheduled</TabsTrigger>
                    <TabsTrigger value="Arrived">Arrived</TabsTrigger>
                    <TabsTrigger value="Completed">Completed</TabsTrigger>
                     <TabsTrigger value="NoShow">NoShow</TabsTrigger>
                </TabsList>
                <TabsContent value="Scheduled" className="w-full">
                    <div className="flex h-20 rounded-md bg-gray-900">
                     <div className="w-14">
                       <span></span> 
                     </div>
                     <div className="flex-1 bg-green-100"></div>   
                    </div>
                </TabsContent>
                <TabsContent value="Arrived">Change your password here.</TabsContent>
            </Tabs>
        </Card>
    )
}