import LeadsTable from './LeadsTable'

export default function AdminPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Gestión de Leads</h2>
        <p className="text-gray-600 mt-2">Gestiona todas las solicitudes de auditoría</p>
      </div>
      
      <LeadsTable />
    </div>
  )
}