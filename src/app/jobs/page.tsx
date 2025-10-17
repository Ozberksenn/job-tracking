import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

const JobsPage = async () => {
  const data = await getData();
  return (
    <Tabs defaultValue="job" className="container mx-auto py-3">
      <div className="flex flex-row justify-between pb-3">
        <TabsList>
          <TabsTrigger value="job">Senin İşlerin</TabsTrigger>
          <TabsTrigger value="all-job">Tüm İşler</TabsTrigger>
          <TabsTrigger value="department-job">
            Departman Bazlı işler
          </TabsTrigger>
        </TabsList>
        <Button variant="default">Oluştur</Button>
      </div>
      <TabsContent value="job">
        {" "}
        <DataTable columns={columns} data={data} />
      </TabsContent>
      <TabsContent value="all-job"> </TabsContent>
      <TabsContent value="department-job"></TabsContent>
    </Tabs>
  );
};

export default JobsPage;
