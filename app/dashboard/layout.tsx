function DashboardLayout({ children } : {
    children: React.ReactNode;
}) {
  return (
    <section className="bg-orange-100 p-2 m-2">
        <h2>Dashboard section</h2>
        {children}
    </section>
  )
}

export default DashboardLayout