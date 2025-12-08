import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanyForm } from "@/features/company/form/CompanyForm"

const CalendarPage = () => {
    return (
        <div className="flex m-5 items-center justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="company">Company Info</TabsTrigger>
                    <TabsTrigger value="socialMedia">Social Media</TabsTrigger>
                    <TabsTrigger value="working">Working Days</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>

        // <div className="grid grid-cols-1 h-full gap-4 m-4">
        //     <div className="grid grid-cols-3 gap-4  max-h-[44vh]">
        //         <FormContainer title="Company Information" children={<CompanyForm />} />
        //         <FormContainer title="Company Information" children={<CompanyForm />} />
        //         <FormContainer title="Company Information" children={<CompanyForm />} />
        //     </div>
        //     <div className="bg-green-100 h-[44vh]">asd</div>
        // </div>
    )
}

interface FormContainerProp {
    title: string
    children: any
}

const FormContainer = ({ title, children }: FormContainerProp) => {
    return (
        <div className="rounded-md border-1 border-gray-900 max-h-[50vh] overflow-y-auto">
            <div className="p-3 rounded-t-md bg-gray-900">{title}</div>
            <div className="p-5">
                {children}
            </div>

        </div>
    )
}


export default CalendarPage