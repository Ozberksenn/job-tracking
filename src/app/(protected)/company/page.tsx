"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountForm } from "@/features/company/form/AccountForm"
import { CompanyForm } from "@/features/company/form/CompanyForm"
import { SocialMediaForm } from "@/features/company/form/SocialMediaForm"
import { WorkingDaysForm } from "@/features/company/form/WorkingDaysForm"
import { useCompany } from "@/lib/api/company/queries"

const CompanyPage = () => {
    const query = useCompany()

    return (
        <div className="flex m-5 items-center justify-center">
            <Tabs defaultValue="account" className="flex w-[50%] items-center">
                <TabsList className="items-center">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="company">Company Info</TabsTrigger>
                    <TabsTrigger value="socialMedia">Social Media</TabsTrigger>
                    <TabsTrigger value="working">Working Days</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className="w-[100%] mt-5">
                        <FormContainer title="Account Info" children={<AccountForm />} />
                    </div>
                </TabsContent>
                <TabsContent value="company">
                    <div className="w-[100%] mt-5">
                        <FormContainer title="Company Info" children={<CompanyForm />} />
                    </div>
                </TabsContent>
                <TabsContent value="socialMedia">
                    <div className="w-[100%] mt-5">
                        <FormContainer title="Socail Media Info" children={<SocialMediaForm />} />
                    </div>
                </TabsContent>
                <TabsContent value="working">
                    <div className="w-[100%] mt-5">
                        <FormContainer title="Working Days Info" children={<WorkingDaysForm />} />
                    </div>
                </TabsContent>
                <TabsContent value="users">
                    <div className="w-[100%] mt-5">
                        <div>Buraya Tüm userların tablosu gelecek.</div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

interface FormContainerProp {
    title: string
    children: any
}

const FormContainer = ({ title, children }: FormContainerProp) => {
    return (
        <Card className="w-[30vw]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}


export default CompanyPage