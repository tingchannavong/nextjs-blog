function DashboardLayout({ children } : {
    children: React.ReactNode;
}) {
  return (
    <section>
        <h2>Dashboard section</h2>
        {children}
    </section>
  )
}

export default DashboardLayout