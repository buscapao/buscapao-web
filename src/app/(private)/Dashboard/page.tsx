export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 pt-0 p-4">
      <h4 className="h2">Dashboard</h4>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="bg-card rounded-xl border p-4 flex flex-col gap-1">
          page 1
        </div>

        <div className="bg-card rounded-xl border p-4 flex flex-col gap-1">
          page 2
        </div>

        <div className="bg-card rounded-xl border p-4 flex flex-col gap-1">
          page 3
        </div>
      </div>
      <div className="bg-card min-h-[100vh] flex-1 rounded-xl md:min-h-min border" />
    </div>
  );
}
